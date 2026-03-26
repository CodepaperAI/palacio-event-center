export const normalizeWordPressContent = (html: string) => {
  if (!html || typeof window === "undefined") {
    return html;
  }

  try {
    const parser = new DOMParser();
    const document = parser.parseFromString(`<div>${html}</div>`, "text/html");
    const container = document.body.firstElementChild as HTMLDivElement | null;

    if (!container) {
      return html;
    }

    container.querySelectorAll("script, gwmw").forEach((node) => node.remove());

    const firstHeading = container.querySelector("h1");
    if (firstHeading) {
      firstHeading.remove();
    }

    return container.innerHTML
      .replace(/\u00a0/g, " ")
      .replace(/<p>\s*<\/p>/g, "")
      .trim();
  } catch {
    return html;
  }
};
