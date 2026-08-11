const PUBLIC_KEY = "key_landing_abc";

type SendContactoOptions = {
  formId?: string;
};

type SendContactoResponse = {
  fieldErrors?: unknown;
  leadId?: string;
  message: string;
  notification?: unknown;
  ok: boolean;
  status: number;
};

type JsonParseResult =
  | { data: unknown; ok: true }
  | { data: null; ok: false };

function buildEndpointUrl() {
  return "https://leads.appfastway.com/Leads/public/leads/ingest";
}

function safeJsonParse(text: string): JsonParseResult {
  try {
    return { data: JSON.parse(text) as unknown, ok: true };
  } catch {
    return { data: null, ok: false };
  }
}

function readRecordValue(record: Record<string, unknown>, key: string) {
  return record[key];
}

export async function sendContacto(
  payload: Record<string, unknown>,
  files: File[] = [],
  opts: SendContactoOptions = {},
): Promise<SendContactoResponse> {
  const formData = new FormData();

  formData.append("pageUrl", window.location.href);
  formData.append("formId", opts.formId || "greenwayContactoMaterial");
  formData.append("payload", JSON.stringify(payload || {}));

  files.forEach((file) => {
    if (file.size > 0) {
      formData.append("files", file);
    }
  });

  let response: Response;

  try {
    response = await fetch(buildEndpointUrl(), {
      body: formData,
      headers: {
        "x-api-key": PUBLIC_KEY,
      },
      method: "POST",
    });
  } catch {
    return {
      message:
        "No fue posible confirmar el envío desde este ambiente. Revisaremos la conexión en producción.",
      ok: false,
      status: 0,
    };
  }

  const status = response.status;
  const text = await response.text();
  const parsed = safeJsonParse(text);

  if (parsed.ok && parsed.data && typeof parsed.data === "object") {
    const data = parsed.data as Record<string, unknown>;
    const ok = response.ok && readRecordValue(data, "ok") === true;
    const message = readRecordValue(data, "message");
    const leadId = readRecordValue(data, "leadId") || readRecordValue(data, "id");

    return {
      fieldErrors: readRecordValue(data, "fieldErrors") || readRecordValue(data, "errors"),
      leadId: typeof leadId === "string" ? leadId : undefined,
      message:
        typeof message === "string"
          ? message
          : ok
            ? "Información enviada. Te contactaremos pronto."
            : "El servidor no pudo procesar la solicitud.",
      notification: readRecordValue(data, "notification"),
      ok,
      status,
    };
  }

  if (response.ok) {
    return {
      message: "Solicitud enviada correctamente.",
      ok: true,
      status,
    };
  }

  let message = "No pudimos enviar tu solicitud.";
  if (status === 400) message = "Revisa los datos enviados.";
  if (status === 401 || status === 403) message = "No autorizado.";
  if (status === 404) message = "Endpoint no encontrado.";
  if (status >= 500) message = "Error interno del servidor.";

  return { message, ok: false, status };
}
