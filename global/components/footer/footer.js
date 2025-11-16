function createFooter() {
  const footer = document.querySelector("footer");
  const head = document.querySelector("head");

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `${window.location.origin}/global/components/footer/footer.css`;
  head.appendChild(link);

  const footerDiv = document.createElement("div");
  footerDiv.className = "footer_content";

  const footerItems = [
    { name: "ホーム", link: "/" },
    { name: "サービス", link: "/services" },
    { name: "お問い合わせ", link: "/contact" },
    { name: "制作の流れ", link: "/flow" },
    { name: "会社概要", link: "/company" },
  ];

  footerItems.forEach((item) => {
    const a = document.createElement("a");
    a.className = "footer_link";
    a.textContent = item.name;
    a.href = item.link;
    footerDiv.appendChild(a);
  });
  footer.appendChild(footerDiv);

  const p = document.createElement("p");
  p.className = "reserved";
  p.textContent = "© 2025 WeBuilding. All rights reserved.";
  footerDiv.appendChild(p);
}

createFooter();
