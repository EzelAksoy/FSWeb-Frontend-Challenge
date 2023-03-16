export const FORM_KAYDET = "FORM_KAYDET";
export function formKaydet(form) {
  return { type: FORM_KAYDET, payload: form };
}

export const HATAYI_KAYDET = "HATAYI_KAYDET";
export function hatayıKaydet(hata) {
  return { type: HATAYI_KAYDET, payload: hata };
}
