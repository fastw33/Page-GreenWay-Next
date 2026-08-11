"use client";

import { BrandIcon } from "@/components/global/BrandIcons";
import { sendContacto } from "@/services/contacto.service";
import { useState, type FormEvent } from "react";

type ContactLotFormCopy = {
  city: string;
  cityPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  material: string;
  materialOptions: string[];
  message: string;
  messagePlaceholder: string;
  name: string;
  namePlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  photos: string;
  photosPlaceholder: string;
  sending: string;
  submit: string;
  success: string;
  subtitle: string;
  title: string;
  weight: string;
  weightPlaceholder: string;
};

type ContactLotFormProps = {
  copy: ContactLotFormCopy;
};

const fieldClass =
  "mt-2 min-h-12 w-full rounded-[4px] border border-[#cbd5e1] bg-white px-4 py-3 text-sm text-[var(--gw-ink)] outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--gw-blue)] focus:ring-2 focus:ring-[rgba(28,110,164,0.15)]";

type FormMessage = {
  text: string;
  type: "error" | "success";
};

function readFormValue(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export function ContactLotForm({ copy }: ContactLotFormProps) {
  const [selectedMaterial, setSelectedMaterial] = useState(copy.materialOptions[0] ?? "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<FormMessage | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const files = formData
      .getAll("photos")
      .filter((file): file is File => file instanceof File && file.size > 0);

    const payload = {
      ciudad: readFormValue(formData, "city"),
      descripcion: readFormValue(formData, "message"),
      email: readFormValue(formData, "email"),
      empresa: readFormValue(formData, "company"),
      formulario: "greenway-contacto-lote",
      material: readFormValue(formData, "material"),
      nombre: readFormValue(formData, "name"),
      origen: "greenwayinter.com/contacto",
      pesoAproximado: readFormValue(formData, "weight"),
      telefono: readFormValue(formData, "phone"),
    };

    try {
      const response = await sendContacto(payload, files, {
        formId: "greenwayContactoMaterial",
      });

      if (response.ok) {
        setMessage({ text: response.message || copy.success, type: "success" });
        form.reset();
        setSelectedMaterial(copy.materialOptions[0] ?? "");
      } else {
        setMessage({ text: response.message, type: "error" });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        text: "Error inesperado al enviar la información.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="border border-[#d7dde3] bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.08)] sm:p-8"
      data-aos="fade-left"
      data-aos-delay="140"
      onSubmit={handleSubmit}
    >
      <div className="flex items-start justify-between gap-6 border-b border-[#d7dde3] pb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--gw-blue)]">
            {copy.subtitle}
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--gw-ink)]">
            {copy.title}
          </h2>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center border border-[var(--gw-green)] text-[var(--gw-green)]">
          <BrandIcon className="h-6 w-6" name="send" />
        </span>
      </div>

      {message ? (
        <div
          aria-live="polite"
          className={`mt-6 border px-4 py-3 text-sm font-semibold ${
            message.type === "success"
              ? "border-[rgba(34,181,115,0.38)] bg-[rgba(34,181,115,0.09)] text-[var(--gw-ink)]"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.name}
          <input
            className={fieldClass}
            name="name"
            placeholder={copy.namePlaceholder}
            required
            type="text"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.company}
          <input
            className={fieldClass}
            name="company"
            placeholder={copy.companyPlaceholder}
            type="text"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.phone}
          <input
            className={fieldClass}
            name="phone"
            placeholder={copy.phonePlaceholder}
            required
            type="tel"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.email}
          <input
            className={fieldClass}
            name="email"
            placeholder={copy.emailPlaceholder}
            type="email"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.material}
          <select
            className={fieldClass}
            name="material"
            onChange={(event) => setSelectedMaterial(event.target.value)}
            required
            value={selectedMaterial}
          >
            {copy.materialOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.city}
          <input
            className={fieldClass}
            name="city"
            placeholder={copy.cityPlaceholder}
            required
            type="text"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.weight}
          <input
            className={fieldClass}
            name="weight"
            placeholder={copy.weightPlaceholder}
            type="text"
          />
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)]">
          {copy.photos}
          <input
            className={fieldClass}
            name="photos"
            accept="image/*,application/pdf"
            multiple
            type="file"
          />
          <span className="mt-2 block text-xs font-normal leading-5 text-[var(--color-muted)]">
            {copy.photosPlaceholder}
          </span>
        </label>
        <label className="text-sm font-semibold text-[var(--gw-ink)] sm:col-span-2">
          {copy.message}
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="message"
            placeholder={copy.messagePlaceholder}
            required
          />
        </label>
      </div>

      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[4px] border border-[var(--gw-green)] bg-[var(--gw-green)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(34,181,115,0.22)] outline-none transition-colors duration-200 hover:border-[var(--gw-blue)] hover:bg-[var(--gw-blue)] focus-visible:ring-2 focus-visible:ring-[var(--gw-green)] focus-visible:ring-offset-4"
        disabled={loading}
        type="submit"
      >
        <span>{loading ? copy.sending : copy.submit}</span>
        <BrandIcon className="h-4 w-4" name="arrowRight" />
      </button>
    </form>
  );
}
