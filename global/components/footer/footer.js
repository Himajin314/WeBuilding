function createFooter() {
  const footer = document.querySelector("footer");
  const head = document.querySelector("head");

  // Prevent duplicate CSS links if function is run multiple times
  if (!document.querySelector(`link[href*="footer.css"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${window.location.origin}/global/components/footer/footer.css`;
    head.appendChild(link);
  }

  // --- Main Footer Container ---
  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  // 1. Brand Column
  const brandCol = document.createElement("div");
  brandCol.className = "footer-col brand-col";

  const logo = document.createElement("h2");
  logo.className = "footer-logo";
  logo.textContent = "WeBuilding";

  const tagline = document.createElement("p");
  tagline.className = "footer-tagline";
  tagline.textContent = "Building the Future of Web.";

  brandCol.appendChild(logo);
  brandCol.appendChild(tagline);

  // 2. Links Column
  const linksCol = document.createElement("div");
  linksCol.className = "footer-col links-col";

  const linksTitle = document.createElement("h3");
  linksTitle.className = "footer-heading";
  linksTitle.textContent = "Menu";
  linksCol.appendChild(linksTitle);

  const linkList = document.createElement("ul");
  linkList.className = "footer-links-list";

  const footerItems = [
    { name: "ホーム", link: "/" },
    { name: "サービス", link: "/services" },
    { name: "制作の流れ", link: "/flow" },
    { name: "会社概要", link: "/company" },
    { name: "お問い合わせ", link: "/contact" },
  ];

  footerItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item.name;
    a.href = item.link;
    li.appendChild(a);
    linkList.appendChild(li);
  });
  linksCol.appendChild(linkList);

  // 3. Contact/Info Column
  const contactCol = document.createElement("div");
  contactCol.className = "footer-col contact-col";

  const contactTitle = document.createElement("h3");
  contactTitle.className = "footer-heading";
  contactTitle.textContent = "Contact Us";
  contactCol.appendChild(contactTitle);

  const contactText = document.createElement("p");
  contactText.textContent = "info@webuilding.jp";
  contactCol.appendChild(contactText);

  const contactText2 = document.createElement("p");
  contactText2.textContent = "03-1234-5678";
  contactCol.appendChild(contactText2);


  // Append columns to container
  footerContainer.appendChild(brandCol);
  footerContainer.appendChild(linksCol);
  footerContainer.appendChild(contactCol);

  // --- Bottom Bar ---
  const bottomBar = document.createElement("div");
  bottomBar.className = "footer-bottom";
  const copyright = document.createElement("p");
  copyright.textContent = "© 2025 WeBuilding. All rights reserved.";
  bottomBar.appendChild(copyright);

  // Append everything to footer
  footer.innerHTML = ""; // Clear existing content
  footer.appendChild(footerContainer);
  footer.appendChild(bottomBar);
}

createFooter();
