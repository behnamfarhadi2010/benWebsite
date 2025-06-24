import { c as createAstro, b as createComponent, r as renderComponent, e as renderTemplate, u as unescapeHTML, F as Fragment, f as addAttribute, g as renderScript, h as renderHead, i as renderSlot } from '../chunks/astro/server_DxYTeY9D.mjs';
import 'kleur/colors';
/* empty css                                 */
import { escape } from 'html-escaper';
import { c as getImage } from '../chunks/_astro_assets_DvMjyn8b.mjs';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { MdWifi } from 'react-icons/md';
import { FaLink, FaApple, FaGithub, FaLinkedin, FaEnvelope, FaTrophy, FaGraduationCap, FaBriefcase, FaUsers, FaPalette, FaBookOpen, FaCode, FaChevronLeft, FaExternalLinkAlt, FaFolder, FaFile } from 'react-icons/fa';
import { IoClose, IoCellular, IoBatteryHalfOutline, IoSearchSharp, IoHelpCircle, IoMail, IoCall, IoDocumentText, IoCodeSlash } from 'react-icons/io5';
import { VscVscode } from 'react-icons/vsc';
import { BsGithub, BsStickyFill, BsFilePdf, BsCalendar, BsSpotify, BsLinkedin } from 'react-icons/bs';
import { RiTerminalFill } from 'react-icons/ri';
import { IoIosCall, IoIosMail } from 'react-icons/io';
export { renderers } from '../renderers.mjs';

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs}>`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs}>`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(
        createOpenGraphTag(`${mediaType}:height`, medium.height.toString())
      );
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const {
      nosnippet,
      maxSnippet,
      maxImagePreview,
      noarchive,
      unavailableAfter,
      noimageindex,
      notranslate
    } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (typeof maxSnippet === "number") robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview)
      robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter)
      robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(
      createLinkTag({
        rel: "alternate",
        media: config.mobileAlternate.media,
        href: config.mobileAlternate.href
      })
    );
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(
        createLinkTag({
          rel: "alternate",
          hreflang: languageAlternate.hreflang,
          href: languageAlternate.href
        })
      );
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(
          createOpenGraphTag(
            "profile:first_name",
            config.openGraph.profile.firstName
          )
        );
      }
      if (config.openGraph.profile.lastName) {
        addTag(
          createOpenGraphTag(
            "profile:last_name",
            config.openGraph.profile.lastName
          )
        );
      }
      if (config.openGraph.profile.username) {
        addTag(
          createOpenGraphTag(
            "profile:username",
            config.openGraph.profile.username
          )
        );
      }
      if (config.openGraph.profile.gender) {
        addTag(
          createOpenGraphTag("profile:gender", config.openGraph.profile.gender)
        );
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(
          createOpenGraphTag(
            "book:release_date",
            config.openGraph.book.releaseDate
          )
        );
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(
          createOpenGraphTag(
            "article:published_time",
            config.openGraph.article.publishedTime
          )
        );
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(
          createOpenGraphTag(
            "article:modified_time",
            config.openGraph.article.modifiedTime
          )
        );
      }
      if (config.openGraph.article.expirationTime) {
        addTag(
          createOpenGraphTag(
            "article:expiration_time",
            config.openGraph.article.expirationTime
          )
        );
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(
          createOpenGraphTag(
            "article:section",
            config.openGraph.article.section
          )
        );
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(
          createOpenGraphTag(
            "video:duration",
            config.openGraph.video.duration.toString()
          )
        );
      }
      if (config.openGraph.video.releaseDate) {
        addTag(
          createOpenGraphTag(
            "video:release_date",
            config.openGraph.video.releaseDate
          )
        );
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(
          createOpenGraphTag("video:series", config.openGraph.video.series)
        );
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(
      createMetaTag({ property: "fb:app_id", content: config.facebook.appId })
    );
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(
        createMetaTag({
          name: "twitter:card",
          content: config.twitter.cardType
        })
      );
    }
    if (config.twitter.site) {
      addTag(
        createMetaTag({ name: "twitter:site", content: config.twitter.site })
      );
    }
    if (config.twitter.handle) {
      addTag(
        createMetaTag({
          name: "twitter:creator",
          content: config.twitter.handle
        })
      );
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://behnamfarhadi2010.github.io");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "/Users/behnamfarhadi/portfolio/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const macBackground1 = new Proxy({"src":"/benWebsite/_astro/mac-background1.BN3pAP-K.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/behnamfarhadi/portfolio/src/assets/images/mac-background1.jpg";
							}
							
							return target[name];
						}
					});

const macBackground3 = new Proxy({"src":"/benWebsite/_astro/mac-background3.D2uWT5Yk.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/behnamfarhadi/portfolio/src/assets/images/mac-background3.jpg";
							}
							
							return target[name];
						}
					});

const id = "portfolio";
const title = "Portfolio (This Website)";
const description = "An open source interactive portfolio website, with a clean and modern design, sections for education, experience, skills, competitions, and more. Built with Astro.js, Tailwind CSS, TypeScript, React, and Vercel.";
const repoUrl = "https://github.com/behnamfarhadi2010/behnamportfolio";
const liveUrl = "https://portfolio-zeta-sable-52.vercel.app/";
const techStack = ["Astro.js","Tailwind CSS","TypeScript","React","Vercel"];
const structure = {"root":"portfolio","children":[{"name":".gitignore","type":"file"},{"name":".vercel","type":"directory","children":[{"name":"output","type":"directory","children":[{"name":"_functions","type":"directory","children":[{"name":"_@astrojs-ssr-adapter.mjs","type":"file"},{"name":"_noop-actions.mjs","type":"file"},{"name":"_noop-middleware.mjs","type":"file"},{"name":"chunks","type":"directory","children":[{"name":"_astro_assets_SiEmllCD.mjs","type":"file"},{"name":"astro-designed-error-pages_CTohK4K9.mjs","type":"file"},{"name":"astro","type":"directory","children":[{"name":"server_DsaXRM-z.mjs","type":"file"}]},{"name":"entrypoint_Baf2ym7p.mjs","type":"file"},{"name":"path_BuZodYwm.mjs","type":"file"},{"name":"sharp_Dq3GUXHW.mjs","type":"file"}]},{"name":"entry.mjs","type":"file"},{"name":"pages","type":"directory","children":[{"name":"_image.astro.mjs","type":"file"},{"name":"api","type":"directory","children":[{"name":"chat.astro.mjs","type":"file"}]},{"name":"index.astro.mjs","type":"file"}]},{"name":"renderers.mjs","type":"file"}]},{"name":"config.json","type":"file"},{"name":"functions","type":"directory","children":[{"name":"_render.func","type":"directory","children":[{"name":".vc-config.json","type":"file"},{"name":"package.json","type":"file"},{"name":"src","type":"directory","children":[{"name":"pages","type":"directory","children":[{"name":"index.astro","type":"file"}]}]}]}]},{"name":"static","type":"directory","children":[{"name":"_astro","type":"directory","children":[{"name":"client.CBwL3ilQ.js","type":"file"},{"name":"index.CG0C8_-B.css","type":"file"},{"name":"index.ai7qpRr1.js","type":"file"},{"name":"mac-background1.BN3pAP-K.jpg","type":"file"},{"name":"mac-background2.DAWzICtV.jpg","type":"file"},{"name":"mac-background3.D2uWT5Yk.jpg","type":"file"}]},{"name":"resume.pdf","type":"file"},{"name":"robots.txt","type":"file"},{"name":"sitemap-0.xml","type":"file"},{"name":"sitemap-index.xml","type":"file"}]}]}]},{"name":".vscode","type":"directory","children":[{"name":"extensions.json","type":"file"},{"name":"launch.json","type":"file"}]},{"name":"README.md","type":"file"},{"name":"astro.config.mjs","type":"file"},{"name":"package-lock.json","type":"file"},{"name":"package.json","type":"file"},{"name":"public","type":"directory","children":[{"name":"resume.pdf","type":"file"},{"name":"robots.txt","type":"file"}]},{"name":"src","type":"directory","children":[{"name":"assets","type":"directory","children":[{"name":"images","type":"directory","children":[{"name":"mac-background1.jpg","type":"file"},{"name":"mac-background2.jpg","type":"file"},{"name":"mac-background3.jpg","type":"file"},{"name":"projects","type":"directory","children":[{"name":"faded-text","type":"directory","children":[{"name":"mainFunction.png","type":"file"},{"name":"transcribed.png","type":"file"}]},{"name":"scheds","type":"directory","children":[{"name":"customizationsSection.png","type":"file"},{"name":"generatedSchedules.png","type":"file"},{"name":"landingPage.png","type":"file"}]}]}]}]},{"name":"components","type":"directory","children":[{"name":"LandingPage.astro","type":"file"},{"name":"global","type":"directory","children":[{"name":"BaseHead.astro","type":"file"},{"name":"DesktopDock.tsx","type":"file"},{"name":"GitHubViewer.tsx","type":"file"},{"name":"MacTerminal.tsx","type":"file"},{"name":"MacToolbar.tsx","type":"file"},{"name":"MobileDock.tsx","type":"file"},{"name":"NotesApp.tsx","type":"file"},{"name":"ResumeViewer.tsx","type":"file"},{"name":"SpotifyPlayer.tsx","type":"file"}]}]},{"name":"config","type":"directory","children":[{"name":"projects","type":"directory","children":[{"name":"clinicalmain.json","type":"file"},{"name":"fadedtextrestoration.json","type":"file"},{"name":"foodies.json","type":"file"},{"name":"neurospeccompanionmerged.json","type":"file"},{"name":"nucpa-balloons.json","type":"file"},{"name":"nucpaballoonsapi.json","type":"file"},{"name":"portfolio.json","type":"file"},{"name":"scheds.json","type":"file"},{"name":"seatreservation.json","type":"file"}]},{"name":"userConfig.ts","type":"file"}]},{"name":"layouts","type":"directory","children":[{"name":"AppLayout.tsx","type":"file"},{"name":"Layout.astro","type":"file"}]},{"name":"pages","type":"directory","children":[{"name":"api","type":"directory","children":[{"name":"chat.ts","type":"file"}]},{"name":"index.astro","type":"file"}]},{"name":"styles","type":"directory","children":[{"name":"global.css","type":"file"}]}]},{"name":"tsconfig.json","type":"file"},{"name":"util","type":"directory","children":[{"name":"github_repo_parser.py","type":"file"},{"name":"requirements.txt","type":"file"}]}]};
const images = [{"url":"https://github.com/behnamfarhadi2010/benWebsite/blob/main/src/assets/images/portfolio1.png","alt":"Portfolio","description":"Portfolio"},{"url":"https://github.com/behnamfarhadi2010/benWebsite/blob/main/src/assets/images/portfolio1.pn","alt":"Portfolio","description":"Projects Page"},{"url":"https://github.com/behnamfarhadi2010/benWebsite/blob/main/src/assets/images/portfolio1.pn","alt":"Portfolio","description":"Project Page"},{"url":"https://github.com/behnamfarhadi2010/benWebsite/blob/main/src/assets/images/portfolio1.pn","alt":"Portfolio","description":"Notes App"}];
const portfolio = {
  id,
  title,
  description,
  repoUrl,
  liveUrl,
  techStack,
  structure,
  images,
};

const userConfig = {
  // Personal Information
  name: "Behnam Farhadi",
  role: "Software Developer - Backend Developer",
  location: "St. Johns, NL, CANADA",
  website: "Behnam Farhadi",
  roleFocus: "Full Stack Developer skilled in JavaScript, React, Node.js, HTML, and CSS, with backend experience using .NET, C#, Entity Framework, and SQL Server, and familiarity with Bootstrap and Angular.",
  age: 39,
  // Social Links
  social: {
    github: "https://github.com/behnamfarhadi2010",
    linkedin: "https://www.linkedin.com/in/farhadi-behnam/"
    // Add your LinkedIn URL
  },
  // Contact Information
  contact: {
    email: "farhadi.behnam@gmail.com",
    phone: "+17093417330",
    // Add your phone number
    calendly: "https://calendly.com/bfarhadi"
    // Add your Calendly URL
  },
  // Spotify Configuration
  spotify: {
    playlistId: "3e6ksTUOhetnqLANRxQRll"},
  // Resume Configuration
  resume: {
    url: "https://drive.google.com/file/d/1e91Bh-XTxbUjQ6QrlgyM-xwbJlNjksRe/view",
    localPath: "/resume.pdf"
  },
  // Education Background
  education: [
    {
      degree: "Master of Computer Science",
      major: "Computer Science",
      institution: "Memorial University of Newfoundland",
      location: "St. Johns, NL, Canada",
      year: "2021-2023",
      description: "Relevant coursework: Software Design, Machine Learning, Information Theory & Coding, Data Visualization, Image Processing, Computer Graphics ",
      images: [
        {
          url: "https://www.applyboard.com/wp-content/uploads/2021/02/memorial-university-of-newfoundland.jpg",
          alt: "Memorial University of Newfoundland",
          description: "Memorial University of Newfoundland Campus"
        }
      ]
    }
  ],
  courses: [
    {
      title: "Software Developer",
      description: "Intro to web developement, React, Node.js, HTML, CSS, JavaScript, Bootstrap, Angular",
      institution: "Get Building",
      location: "St. Johns, NL, CANADA",
      year: "2025",
      images: [
        {
          url: "https://framerusercontent.com/images/sTlnSV1drfSEnGWSvvGAvF48o.jpg",
          alt: "Get Building"
          // description: "ITI Campus"
        }
      ]
    },
    {
      title: "Digital Marketing Professional Certification",
      description: "The Digital Marketing Management course contains, Digital Marketing Headlines, Website Optimization, Google Analytics, Google Advertising, Digital Marketing Campaign Development, Digital Marketing Strategy Marketing",
      institution: "MTF Institute of Management, Technology and Finance",
      location: "«Lisboa, Portugal",
      year: "2024",
      images: [
        {
          url: "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/349155959_1269980653914239_1597853967597243041_n.png?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=fATbARBV5n4Q7kNvwG2rcCy&_nc_oc=AdkgebbdhMFnRm-HQ4VSmsK9SdaCrDbL1CUhoHSzXzoTmPR7rc81dLxpq0KUM87UaXQ&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=eHruv0vDE7ELGxGwZ7Snjg&oh=00_AfOz1MM5OEC7Skw_7nSz6l1woAWTErz5GWkAypzWASC9tw&oe=685B4ED7",
          alt: "MTF Institute of Management, Technology and Finance"
          // description: "DEPI Logo"
        }
      ]
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Wordpress",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "MongoDB",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "HTML",
    "Css",
    "Python",
    "Astro Web Framework"
  ],
  // extraCurricularRoles: [
  //     {
  //         role: "Vice President",
  //         institution: "NUICPC",
  //         location: "Nile University",
  //         year: "2023-2024",
  //         images: [
  //             {
  //                 url: "https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/1fLrcywC/487093779-1079182100910887-5326561587880729477-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/mVJBpngp/486181151-1075334944628936-2845216629795518112-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/yn7ccHM1/486507182-1075334774628953-7774379668898780058-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/35xMtCDV/486104871-1075333997962364-6362307301859416001-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/fzL5qvvS/486248194-1074582274704203-6554786202979315108-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/VYxSXZF5/483525641-1070070571822040-3631060112169135578-n.jpg",
  //                 alt: "NUICPC",
  //                 // description: "NUICPC Campus"
  //             }
  //         ]
  //     },
  //     {
  //         role: "Head of SWE Committee",
  //         institution: "GDG Nile University",
  //         location: "Nile University",
  //         year: "2024-2025",
  //         images: [
  //             {
  //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             }
  //         ]
  //     },
  //     {
  //         role: "Member and Mentor",
  //         institution: "NUICPC",
  //         location: "Nile University",
  //         year: "2021-2024",
  //         images: [
  //             {
  //                 url: "https://i.ibb.co/Y43vdxrV/484501388-1069637098532054-11435862832739630-n.jpg",
  //                 alt: "NUICPC",
  //             },
  //             {
  //                 url: "https://i.ibb.co/WWBPM6GG/484804363-1069556495206781-5476304623000762204-n.jpg",
  //                 alt: "Nile University",
  //                 // description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
  //                 alt: "Nile University",
  //                 // description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/ZR4dJLyv/482238905-1065269192302178-4747858326277637907-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/ymJN2v00/482246774-1065269122302185-3150232388297078773-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/vxYBzH64/482027750-1063466179149146-4344066305683793822-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/j9K3Smq8/481466571-1061263352702762-7633575959379424468-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/S7R12bRy/484136881-1069556391873458-1395371296655723435-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/zWVHwSPH/484516365-1070411428454621-8390835945290794938-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/27L4bpQY/484381461-1069479998547764-3349306911678016045-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/MyFj8V6s/484140894-1069479545214476-3560564697839847145-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/Sw9psfwX/484640131-1069484585213972-5052989750649951025-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //                 url: "https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg",
  //                 alt: "NUICPC"
  //             },
  //             {
  //             }
  //         ]
  //     },
  //     {
  //         role: "Member",
  //         institution: "TEDxNU",
  //         location: "Nile University",
  //         year: "2021-2022",
  //         images: [
  //             {
  //                 url: "https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             }
  //         ]
  //     },
  // ],
  // extraCurricularActivities: [
  //     {
  //         title: "Head of IT & Cheating Control Committee",
  //         description: "NUCPA",
  //         institution: "NUCPA",
  //         location: "Nile University",
  //         year: "2025",
  //         images: [
  //             {
  //                 url: "https://i.ibb.co/N6FsYfLW/NP100582-2.jpg",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/355vdbMJ/NP109982-1.jpg",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://i.ibb.co/Frhbfyq/NP100626-2-1.jpg",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             }
  //         ]
  //     },
  //     {
  //         title: "SWE Sessions",
  //         institution: "GDG Nile University",
  //         location: "Nile University",
  //         year: "2025",
  //         images: [
  //             {
  //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             }
  //         ]
  //     },
  //     {
  //         title: "NUICPC Problem Solving Sessions",
  //         description: "Mentored students in problem solving and competitive programming, started as a member and became a mentor, from level 0 to level 2, and helped them to qualify for the ECPC Finals",
  //         institution: "NUICPC",
  //         location: "Nile University",
  //         year: "2022-2025",
  //         images: [
  //             {
  //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/486652074_1077701407725623_8749819316280105843_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=925gSLld9YIQ7kNvwH1Tnis&_nc_oc=AdkNGFJJzloJMZ7UyMqzyxpop7LgOAS4wDf37phzksSB9zyg6YYoJn9DvQBkTRCPe3c&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=2jkQxIt1NA2bEK9hDA_sLw&oh=00_AfEFWMQ8TXpm7J7GNg31NTQtj51-xBK0gA96v3e3FXFOXw&oe=6806D41D",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487509808_1082047970624300_6971553578124341594_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aHeR-Y9xLCoQ7kNvwEt75GT&_nc_oc=AdmO0ISS5S83f5_spVUXrCY5OhawFzqurVuym-4vhEnrUw3H4-jlAWwwPr51_y97zEE&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=yluqC4DSHyLfMjmLwL8hWA&oh=00_AfHf2HeyPANMbQPqIrHx24nzfxeuQkMaeMbP9SlpaTW-gg&oe=6806D086",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             },
  //             {
  //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/484516365_1070411428454621_8390835945290794938_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=eGV6obo35CwQ7kNvwEna_H_&_nc_oc=AdkJaDZSOxHorBC4LMHappVliFJtwF5f7D8dyRSgS9Dn6aLdg1YEnE6taP2Ig3sbyQs&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=mEX3OZGsZeCySB76oTVkRQ&oh=00_AfEuFzuaNHYsYm3DLGnEWPCQYRyyQfVNh64r__8G_DKNaA&oe=6806E9D5",
  //                 alt: "Nile University",
  //                 description: "Nile University Campus"
  //             }
  //         ]
  //     }
  // ],
  competitions: [
    {
      title: "Second Place - Working IT Immigration Solutions",
      description: "Genesis 25th PitchAndPick winners",
      achievement: "2nd Place at the Genesis 25th PitchAndPick winners! 🎉🏆",
      year: "2022",
      images: [
        {
          url: "https://media.licdn.com/dms/image/v2/C4D22AQEXb0Q7fLItMg/feedshare-shrink_800/feedshare-shrink_800/0/1649279078035?e=1753315200&v=beta&t=y63u3ZMJ1Oxi4vthy8zbKsvIisnF_A1lir2qtXTyVt0",
          alt: "Genesis pitch and pick",
          description: "1st and 2nd teams of the Genesis 25th PitchAndPick winners"
        }
      ]
    }
  ],
  // Professional Experience
  experience: [
    {
      title: "Web Developer & Digital Marketing Specialist",
      company: "Historic Sites Association of Newfoundland and Labrador",
      location: "St. Johns, NL, Canada",
      period: "May 2024 - Present",
      description: "Developing and maintaining the association's website using WordPress, HTML, CSS, and JavaScript. Implementing digital marketing strategies to increase online presence and engagement.",
      technologies: ["WordPress", "HTML", "CSS", "JavaScript", "Digital Marketing", "Google Ads", "SEO"],
      images: [
        {
          url: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/415919589_344937808359127_5656612764170068384_n.png?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=Bclq4-caLwoQ7kNvwFM6Ijv&_nc_oc=AdllpuVigtuX1jc8AJCO2LI3XKoCUiouWZZLHrSodNV-HqgNQCGZNw6SBh4fI8ZDbDs&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=ZP0R8Blq9q94MbfqZockfw&oh=00_AfNy8-TZK6pCp3zpcyOlbid30fOmNm2-qoQENk0ZgyNrMw&oe=685B5BCC",
          alt: "Heritage Shops NL"
          // description: "Luftborn Logo"
        }
      ]
    },
    {
      title: "Webmaster",
      company: "Graduate Student union of Memorial University of Newfoundland",
      location: "St. Johns, NL, Canada",
      period: "May 2021 - May 2022",
      description: "Managed the Graduate Student Union's website, ensuring it was up-to-date and user-friendly. Developed new features and optimized the site for better performance.",
      technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP"],
      images: [
        {
          url: "https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/308540607_503011631832648_4766869946006526949_n.png?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZeJnsgad2ioQ7kNvwHozlno&_nc_oc=AdkmnbT4Fx_wOMoR83_8qXXYweoerJwFxSKvrEQ7TEIQY3DJ1j3Z7She_oHo5_CxhHM&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=tBmIHym0_r58JvvPex2ICg&oh=00_AfPFqb74X94BX0kyY1oHradTHh04UL1eBVqLdYMG2ChZkA&oe=685B5704",
          alt: "GSU MUN"
          // description: "Working on .NET projects during the internship"
        }
      ]
    },
    {
      title: "Web Developer & Digital Marketing Specialist",
      company: "VacCoat",
      location: "UK, Remote",
      period: "July 2018 - July 2020",
      description: "Developed and maintained the company's website, implemented SEO strategies, and managed digital marketing campaigns. Worked with a team to enhance online visibility and customer engagement.",
      technologies: ["WordPress", "HTML", "CSS", "JavaScript", "SEO", "Digital Marketing"],
      images: [
        {
          url: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/232517594_126144226389274_781516961966171378_n.png?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=79LQjz-38ZgQ7kNvwGXQyOf&_nc_oc=AdmuzDV0Dnqz-lOvuWfb39IBPEd_ZSfJQM3-OjYlAQSHWceAINzPkKoSmvjIgocmETc&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=ctO3FCwVPLF0hv_PGiVWaw&oh=00_AfNdYqIT8ulLA_T1RZFuaItciR-lB1MjQIzSCbHL5KP6bg&oe=685B54E5",
          alt: "VacCoat Ltd."
          // description: "Working on .NET projects during the internship"
        }
      ]
    }
  ],
  // SEO Configuration
  seo: {
    title: "Behnam Farhadi - Software Developer",
    description: "Software Developer based in St. Johns, NL, CANADA, specializing in React, Node.js, and modern web technologies"},
  // Theme Configuration
  theme: {
    // Spotify green
    secondaryColor: "#1d1d1f"},
  // Projects Configuration
  projects: [
    // scheds,
    portfolio
    // foodies,
    // fadedTextRestoration,
    // nucpaBalloons,
    // nucpaBalloonsApi,
    // neurospeccompanionmerged,
    // clinicalmain,
    // seatReservation,
    // Add more projects here
  ]
};

const $$Astro$3 = createAstro("https://behnamfarhadi2010.github.io");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const backgrounds = await Promise.all([
    getImage({ src: macBackground1, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 }),
    getImage({ src: macBackground3, width: 3500 })
  ]);
  return renderTemplate`<!-- Core meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><meta name="author"${addAttribute(userConfig.name, "content")}><!-- SEO Configuration -->${renderComponent($$result, "AstroSeo", $$AstroSeo, { "title": Astro2.props.title || userConfig.seo.title, "description": Astro2.props.description || userConfig.seo.description, "canonical": Astro2.props.canonical || userConfig.website, "openGraph": {
    url: Astro2.props.openGraph?.url || userConfig.website,
    title: Astro2.props.openGraph?.title || userConfig.seo.title,
    description: Astro2.props.openGraph?.description || userConfig.seo.description,
    images: [
      {
        url: ""
        // og image here
      }
    ],
    site_name: Astro2.props.openGraph?.site_name || userConfig.name
  } })}<!-- Add your favicon files in public/images/ --><link rel="apple-touch-icon" sizes="180x180" href="https://avatars.githubusercontent.com/u/3647605?v=4"><link rel="icon" type="image/png" sizes="32x32" href="https://avatars.githubusercontent.com/u/3647605?v=4"><link rel="icon" type="image/png" sizes="16x16" href="https://avatars.githubusercontent.com/u/3647605?v=4"><!-- Theme colors for browsers --><meta name="msapplication-TileColor"${addAttribute(userConfig.theme.secondaryColor, "content")}><meta name="theme-color"${addAttribute(userConfig.theme.secondaryColor, "content")}><!-- Auto-generated sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- Preload background images for performance -->${backgrounds.map((bg) => renderTemplate`<link rel="preload"${addAttribute(bg.src, "href")} as="image" type="image/webp" fetchpriority="high">`)}`;
}, "/Users/behnamfarhadi/portfolio/src/components/global/BaseHead.astro", void 0);

const $$Astro$2 = createAstro("https://behnamfarhadi2010.github.io");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/behnamfarhadi/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/behnamfarhadi/portfolio/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://behnamfarhadi2010.github.io");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/behnamfarhadi/portfolio/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/behnamfarhadi/portfolio/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://behnamfarhadi2010.github.io");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" class="scroll-smooth selection:bg-gray-900 selection:text-white overflow-x-hidden"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": Astro2.props.title, "description": Astro2.props.description, "canonical": Astro2.props.canonical, "openGraph": Astro2.props.openGraph })}${renderComponent($$result, "Analytics", $$Index$2, {})}${renderComponent($$result, "SpeedInsights", $$Index$1, {})}${renderHead()}</head> <body class="overflow-x-hidden bg-gray-900"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/behnamfarhadi/portfolio/src/layouts/Layout.astro", void 0);

function HelpModal({
  isOpen,
  onClose,
  onTerminalClick
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setActiveStep(0);
    }
  }, [isOpen]);
  const steps = [
    {
      title: "Welcome to My Portfolio!",
      content: "This is a macOS-inspired portfolio with interactive features. Let me show you around!",
      animation: "animate-fade-in",
      button: null
    },
    {
      title: "The Terminal",
      content: "The MacTerminal is your AI-powered assistant. Ask it anything about me, my skills, or my experience!",
      animation: "animate-slide-in-right",
      button: {
        text: "Open Terminal",
        icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }),
        onClick: () => {
          if (onTerminalClick) {
            onTerminalClick();
            handleClose();
          }
        }
      }
    },
    {
      title: "Desktop Dock",
      content: "The dock at the bottom contains all the main features of my portfolio. Each icon represents a different section:",
      animation: "animate-slide-in-left",
      button: null,
      features: [
        { icon: /* @__PURE__ */ jsx(BsGithub, { size: 20 }), text: "GitHub Projects" },
        { icon: /* @__PURE__ */ jsx(BsStickyFill, { size: 20 }), text: "Resume Notes" },
        { icon: /* @__PURE__ */ jsx(BsFilePdf, { size: 20 }), text: "Resume Viewer" },
        { icon: /* @__PURE__ */ jsx(BsCalendar, { size: 20 }), text: "Schedule a Call" },
        { icon: /* @__PURE__ */ jsx(BsSpotify, { size: 20 }), text: "Spotify Playlist" },
        { icon: /* @__PURE__ */ jsx(FaLink, { size: 20 }), text: "Contact Links" },
        { icon: /* @__PURE__ */ jsx(RiTerminalFill, { size: 20 }), text: "Terminal" }
      ]
    },
    {
      title: "Menu Bar",
      content: "Use the menu bar to access my resume, projects, and contact information. Hover over my name for a cool surprise!",
      animation: "animate-slide-in-up",
      button: null
    }
  ];
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      handleClose();
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        style: { opacity: isVisible ? 1 : 0 },
        onClick: handleClose
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `relative bg-gray-900/95 rounded-lg p-6 max-w-md w-full mx-4 transform transition-all duration-300 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`,
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleClose,
              className: "absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",
              children: /* @__PURE__ */ jsx(IoClose, { size: 24 })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `${steps[activeStep].animation} mb-4`, children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-2", children: steps[activeStep].title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: steps[activeStep].content }),
            steps[activeStep].features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 mt-4", children: steps[activeStep].features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-300", children: [
              /* @__PURE__ */ jsx("div", { className: "text-white", children: feature.icon }),
              /* @__PURE__ */ jsx("span", { children: feature.text })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex space-x-2", children: steps.map((_, index) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveStep(index),
                className: `w-2 h-2 rounded-full transition-colors ${index === activeStep ? "bg-white" : "bg-gray-600"}`
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              steps[activeStep].button && /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: steps[activeStep].button?.onClick,
                  className: "px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors flex items-center gap-2",
                  children: [
                    steps[activeStep].button?.icon,
                    steps[activeStep].button?.text
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleNext,
                  className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
                  children: activeStep === steps.length - 1 ? "Got it!" : "Next"
                }
              )
            ] })
          ] })
        ]
      }
    )
  ] });
}

function MacToolbar({
  onTerminalClick,
  onShowTutorial
}) {
  const [currentDateTime, setCurrentDateTime] = useState(/* @__PURE__ */ new Date());
  const [activeMenu, setActiveMenu] = useState(null);
  const [showSignature, setShowSignature] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(/* @__PURE__ */ new Date());
    }, 6e4);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const formatMacDate = (date) => {
    const weekday = date.toLocaleString("en-US", { weekday: "short" });
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const hour = date.toLocaleString("en-US", {
      hour: "numeric",
      hour12: true
    });
    const minute = date.getMinutes().toString().padStart(2, "0");
    const period = date.getHours() >= 12 ? "PM" : "AM";
    return `${weekday} ${month} ${day} ${hour.replace(
      /\s?[AP]M/,
      ""
    )}:${minute} ${period}`;
  };
  const formatIPhoneTime = (date) => {
    let hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, "0");
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${minute}`;
  };
  const handleVSCodeClick = () => {
    window.location.href = "vscode:/";
  };
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  const handleAction = (action) => {
    if (action) {
      action();
      setActiveMenu(null);
    }
  };
  const menus = {
    File: [
      {
        label: "Resume",
        icon: /* @__PURE__ */ jsx(IoDocumentText, { size: 16 }),
        action: () => window.open(userConfig.resume.url, "_blank")
      },
      {
        label: "Projects",
        icon: /* @__PURE__ */ jsx(IoCodeSlash, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      }
    ],
    Edit: [
      {
        label: "Copy Email",
        icon: /* @__PURE__ */ jsx(IoMail, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.email);
          alert("Email copied to clipboard!");
        }
      },
      {
        label: "Copy Phone",
        icon: /* @__PURE__ */ jsx(IoCall, { size: 16 }),
        action: () => {
          navigator.clipboard.writeText(userConfig.contact.phone);
          alert("Phone number copied to clipboard!");
        }
      }
    ],
    Go: [
      {
        label: "GitHub",
        icon: /* @__PURE__ */ jsx(FaGithub, { size: 16 }),
        action: () => window.open(userConfig.social.github, "_blank")
      },
      {
        label: "LinkedIn",
        icon: /* @__PURE__ */ jsx(FaLinkedin, { size: 16 }),
        action: () => window.open(userConfig.social.linkedin, "_blank")
      },
      {
        label: "Email",
        icon: /* @__PURE__ */ jsx(FaEnvelope, { size: 16 }),
        action: () => window.open(`mailto:${userConfig.contact.email}`)
      }
    ],
    Help: [
      {
        label: "Show Help",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => setShowHelp(true)
      },
      {
        label: "Show Tutorial",
        icon: /* @__PURE__ */ jsx(IoHelpCircle, { size: 16 }),
        action: () => onShowTutorial?.()
      }
    ]
  };
  const renderMenu = (menuItems) => /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: menuItems.map((item, index) => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(item.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          item.icon,
          item.label
        ]
      }
    ),
    item.submenu && /* @__PURE__ */ jsx("div", { className: "absolute left-full top-0 ml-1 bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-xl py-1 min-w-[200px]", children: item.submenu.map((subItem, subIndex) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => handleAction(subItem.action),
        className: "w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-700/50 flex items-center gap-2",
        children: [
          subItem.icon,
          subItem.label
        ]
      },
      subIndex
    )) })
  ] }, index)) });
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      HelpModal,
      {
        isOpen: showHelp,
        onClose: () => setShowHelp(false),
        onTerminalClick
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 md:hidden bg-transparent text-white h-12 px-8 flex items-center justify-between text-base font-medium", children: [
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: formatIPhoneTime(currentDateTime) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx(IoCellular, { size: 20 }),
        /* @__PURE__ */ jsx(MdWifi, { size: 20 }),
        /* @__PURE__ */ jsx(IoBatteryHalfOutline, { size: 24 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-50 hidden md:flex bg-black/20 backdrop-blur-md text-white h-6 px-4 items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", ref: menuRef, children: [
        /* @__PURE__ */ jsx(FaApple, { size: 16 }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "font-semibold hover:text-gray-300 transition-colors cursor-pointer",
              onMouseEnter: () => setShowSignature(true),
              onMouseLeave: () => setShowSignature(false),
              children: userConfig.name
            }
          ),
          showSignature && /* @__PURE__ */ jsx("div", { className: "absolute top-full left-0 mt-1 bg-white/98 backdrop-blur-sm rounded-lg p-4 shadow-xl z-[100]", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/src/assets/images/me.svg",
              alt: "Signature",
              className: "w-[100px] h-[100px]"
            }
          ) })
        ] }),
        Object.entries(menus).map(([menu, items]) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "cursor-pointer hover:text-gray-300 transition-colors",
              onClick: () => handleMenuClick(menu),
              children: menu
            }
          ),
          activeMenu === menu && renderMenu(items)
        ] }, menu))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          VscVscode,
          {
            size: 16,
            className: "cursor-pointer hover:opacity-80 transition-opacity",
            onClick: handleVSCodeClick,
            title: "Open in VSCode"
          }
        ),
        /* @__PURE__ */ jsx(MdWifi, { size: 16 }),
        /* @__PURE__ */ jsx(IoSearchSharp, { size: 16 }),
        /* @__PURE__ */ jsx("span", { className: "cursor-default", children: formatMacDate(currentDateTime) })
      ] })
    ] })
  ] });
}

let globalZIndex = 10;
const MIN_WIDTH = 400;
const MIN_HEIGHT = 300;
function DraggableWindow({
  title,
  onClose,
  children,
  initialPosition = { x: 0, y: 0 },
  initialSize = { width: 400, height: 300 },
  className = ""
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(globalZIndex);
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef(null);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const bringToFront = () => {
    globalZIndex += 1;
    setZIndex(globalZIndex);
  };
  const handleMouseDown = (e) => {
    if (isMobile) return;
    if (e.target instanceof HTMLElement) {
      bringToFront();
      if (e.target.closest(".window-header")) {
        setIsDragging(true);
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
        e.preventDefault();
      } else if (e.target.closest(".resize-handle")) {
        setIsResizing(true);
        setResizeDirection(e.target.getAttribute("data-direction"));
        e.preventDefault();
      }
    }
  };
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      const windowWidth = windowRef.current?.offsetWidth || 0;
      const windowHeight = windowRef.current?.offsetHeight || 0;
      const maxX = window.innerWidth - windowWidth / 2;
      const maxY = window.innerHeight - windowHeight / 2;
      const minX = -windowWidth / 2;
      const minY = 24;
      setPosition({
        x: Math.max(minX, Math.min(newX, maxX)),
        y: Math.max(minY, Math.min(newY, maxY))
      });
    } else if (isResizing) {
      const rect = windowRef.current?.getBoundingClientRect();
      if (rect) {
        const newSize = { ...size };
        const newPosition = { ...position };
        if (resizeDirection?.includes("right")) {
          newSize.width = Math.max(MIN_WIDTH, e.clientX - rect.left);
        }
        if (resizeDirection?.includes("left")) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
        }
        if (resizeDirection?.includes("bottom")) {
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        if (resizeDirection?.includes("bottom-left")) {
          const newWidth = Math.max(MIN_WIDTH, rect.right - e.clientX);
          newSize.width = newWidth;
          newPosition.x = rect.right - newWidth;
          newSize.height = Math.max(MIN_HEIGHT, e.clientY - rect.top);
        }
        setSize(newSize);
        setPosition(newPosition);
      }
    }
  };
  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection(null);
  };
  useEffect(() => {
    bringToFront();
    if (isMobile) return;
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "none";
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.userSelect = "";
    };
  }, [isDragging, isResizing, resizeDirection, dragOffset, isMobile]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: windowRef,
      className: `${isMobile ? "fixed inset-0 m-4 rounded-xl" : "absolute rounded-xl"} bg-[#1d1d1f] shadow-xl overflow-hidden p-0 transition-all duration-300 ${isDragging ? "cursor-grabbing" : "cursor-default"} ${className}`,
      style: {
        ...isMobile ? {} : {
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height
        },
        zIndex,
        transition: isDragging || isResizing ? "none" : "all 0.2s ease-out"
      },
      onMouseDown: handleMouseDown,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "window-header bg-gray-800 h-6 flex items-center space-x-2 px-4 rounded-t-xl sticky top-0 left-0 right-0 z-10", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: onClose,
              className: "w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
          /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300 flex-grow text-center font-semibold", children: title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-[calc(100%-1.5rem)]", children: [
          children,
          !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 left-0 right-0 h-2 cursor-ns-resize",
                "data-direction": "bottom"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize",
                "data-direction": "right"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute left-0 top-0 bottom-0 w-2 cursor-ew-resize",
                "data-direction": "left"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize",
                "data-direction": "bottom-right"
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "resize-handle absolute bottom-0 left-0 w-3 h-3 cursor-nesw-resize",
                "data-direction": "bottom-left"
              }
            )
          ] })
        ] })
      ]
    }
  );
}

const PLACEHOLDER_MESSAGES = [
  "Type your question...",
  "What are your skills?",
  "Where are you located?",
  "What projects have you worked on?"
];
function MacTerminal({ isOpen, onClose }) {
  const [chatHistory, setChatHistory] = useState({
    messages: [],
    input: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    let timeout;
    const currentMessage = PLACEHOLDER_MESSAGES[currentPlaceholderIndex];
    const animatePlaceholder = () => {
      if (isDeleting) {
        if (placeholder.length === 0) {
          setIsDeleting(false);
          setCurrentPlaceholderIndex(
            (prev) => (prev + 1) % PLACEHOLDER_MESSAGES.length
          );
          timeout = setTimeout(animatePlaceholder, 400);
        } else {
          setPlaceholder((prev) => prev.slice(0, -1));
          timeout = setTimeout(animatePlaceholder, 80);
        }
      } else {
        if (placeholder.length === currentMessage.length) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setPlaceholder(currentMessage.slice(0, placeholder.length + 1));
          timeout = setTimeout(animatePlaceholder, 120);
        }
      }
    };
    timeout = setTimeout(animatePlaceholder, 100);
    return () => clearTimeout(timeout);
  }, [placeholder, isDeleting, currentPlaceholderIndex]);
  const welcomeMessage = `Welcome to My Portfolio

Name: ${userConfig.name}
Role: ${userConfig.role}
Location: ${userConfig.location}

Contact: ${userConfig.contact.email}
GitHub: ${userConfig.social.github}

Ask me anything!
`;
  const currentDate = /* @__PURE__ */ new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const systemPrompt = `IMPORTANT: You ARE ${userConfig.name} themselves. You must always speak in first-person ("I", "my", "me"). Never refer to "${userConfig.name}" in third-person.
CURRENT DATE: ${formattedDate} - Always use this exact date when discussing the current date/year.

Example responses:
Q: "Where do you live?"
A: "I live in ${userConfig.location}"

Q: "What's your background?"
A: "I'm a ${userConfig.role} with a focus for ${userConfig.roleFocus}"

Q: "How old are you?"
A: "I'm ${userConfig.age} years old"

Core details about me:
- I'm ${userConfig.age} years old
- I live in ${userConfig.location}
- I'm a ${userConfig.role}
- My email is ${userConfig.contact.email}
- I was born in ${userConfig.location}

My technical expertise:
${userConfig.skills.map((skill) => `- ${skill}`).join("\n")}

My education:
- ${userConfig.education[0].degree} in ${userConfig.education[0].major}
- ${userConfig.education[0].institution}, ${userConfig.education[0].location} (${userConfig.education[0].year})

My professional experience:
${userConfig.experience.map((exp) => `- ${exp.title} at ${exp.company}, ${exp.location} (${exp.period})`).join("\n")}

My projects:
${userConfig.projects.map((project) => `- ${project.title}: ${project.description}`).join("\n")}

My achievements and competitions:
${userConfig.competitions.map((comp) => `- ${comp.title} (${comp.year}): ${comp.achievement}`).join("\n")}

Response rules:
1. ALWAYS use first-person (I, me, my)
2. Never say "${userConfig.name}" or refer to myself in third-person
3. Keep responses concise and professional
4. Use markdown formatting when appropriate
5. Maintain a friendly, conversational tone

If a question is unrelated to my work or portfolio, say: "That's outside my area of expertise. Feel free to email me at ${userConfig.contact.email} and we can discuss further!"`;
  useEffect(() => {
    setChatHistory((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        { role: "assistant", content: welcomeMessage }
      ]
    }));
  }, []);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory.messages]);
  const handleInputChange = (e) => {
    setChatHistory((prev) => ({ ...prev, input: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = chatHistory.input.trim();
    if (!userInput) return;
    setChatHistory((prev) => ({
      messages: [...prev.messages, { role: "user", content: userInput }],
      input: ""
    }));
    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            ...chatHistory.messages,
            { role: "user", content: userInput }
          ]
        })
      });
      if (!response.ok) throw new Error("Failed to get response");
      const data = await response.json();
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          { role: "assistant", content: data.message }
        ]
      }));
    } catch (error) {
      setChatHistory((prev) => ({
        ...prev,
        messages: [
          ...prev.messages,
          {
            role: "assistant",
            content: `I'm having trouble processing that. Please email me at ${userConfig.contact.email}`
          }
        ]
      }));
    } finally {
      setIsTyping(false);
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: `${userConfig.website} ⸺ zsh`,
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.1)
      },
      initialSize: { width: 700, height: 500 },
      className: "bg-black/90 backdrop-blur-sm",
      children: /* @__PURE__ */ jsxs("div", { className: "p-1 text-gray-200 font-mono text-sm h-full flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto rounded-lg p-1", children: [
          chatHistory.messages.map((msg, index) => /* @__PURE__ */ jsx("div", { className: "mb-2", children: msg.role === "user" ? /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: ">" }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-green-400 font-bold", children: [
              "$",
              userConfig.website
            ] }),
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: msg.content })
          ] }) }, index)),
          isTyping && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "0ms" } }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "150ms" } }),
            /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full animate-bounce", style: { animationDelay: "300ms" } })
          ] }),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
        ] }),
        /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className: "mt-2 rounded-lg p-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "whitespace-nowrap text-green-400 font-bold", children: [
            userConfig.website,
            " root %"
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: chatHistory.input,
              onChange: handleInputChange,
              className: "w-full sm:flex-1 bg-transparent outline-none text-white placeholder-gray-400",
              placeholder
            }
          )
        ] }) })
      ] })
    }
  );
}

function MobileDock({ onGitHubClick, onNotesClick, onResumeClick, onTerminalClick }) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${userConfig.contact.email}`;
  };
  const handleSpotifyClick = () => {
    window.open(`https://open.spotify.com/playlist/${userConfig.spotify.playlistId}`, "_blank");
  };
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-0 left-0 right-0 md:hidden flex flex-col items-center z-10 space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onGitHubClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsGithub, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onNotesClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsStickyFill, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onResumeClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-red-600 to-red-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsFilePdf, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onTerminalClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-black rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 55, className: "text-white" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mx-4 mb-4 p-3 bg-gradient-to-t from-gray-700 to-gray-800 backdrop-blur-xl rounded-3xl space-x-4 flex justify-around items-center max-w-[400px] mx-auto", children: [
      /* @__PURE__ */ jsx("a", { href: `tel:${userConfig.contact.phone}`, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-green-600 to-green-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosCall, { size: 55, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleEmailClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(IoIosMail, { size: 55, className: "text-white" }) })
        }
      ),
      /* @__PURE__ */ jsx("a", { href: userConfig.social.linkedin, className: "flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-[#0a66c2] rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsLinkedin, { size: 50, className: "text-white" }) }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSpotifyClick,
          className: "flex flex-col items-center cursor-pointer",
          children: /* @__PURE__ */ jsx("div", { className: "w-18 h-18 bg-gradient-to-t from-black to-black/55 rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsx(BsSpotify, { size: 55, className: "text-[#1ED760]" }) })
        }
      )
    ] })
  ] });
}

function ResumeViewer({ isOpen, onClose }) {
  useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Resume.pdf",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.4),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[90%] h-[90%] max-w-5xl",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "h-full bg-white", children: /* @__PURE__ */ jsx("figure", { className: "h-full", children: /* @__PURE__ */ jsx("object", { data: userConfig.resume.localPath, type: "application/pdf", width: "100%", className: "h-full" }) }) })
    }
  );
}

function SpotifyPlayer({ isOpen, onClose, playlistId }) {
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: "Spotify Player",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.1),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: `w-[90%] max-w-md transition-all duration-300 ${isMinimized ? "h-16" : "h-[300px]"}`,
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: `h-full transition-all duration-300 ${isMinimized ? "hidden" : "block"}`, children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`,
          width: "100%",
          height: "100%",
          allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
          loading: "lazy",
          className: "border-0"
        }
      ) })
    }
  );
}

const DesktopDock = ({ onTerminalClick, onNotesClick, onGitHubClick, activeApps }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showLinksPopup, setShowLinksPopup] = useState(false);
  const linksPopupRef = useRef(null);
  const handleLinksClick = () => {
    setShowLinksPopup(!showLinksPopup);
  };
  const handleCalendarClick = () => {
    window.open(userConfig.contact.calendly, "_blank");
  };
  const handleSpotifyClick = () => {
    setShowSpotify(true);
  };
  const handleResumeClick = () => {
    setShowResume(true);
  };
  const handleCloseResume = () => {
    setShowResume(false);
  };
  const handleCloseSpotify = () => {
    setShowSpotify(false);
  };
  const handleEmailClick = () => {
    window.open(`mailto:${userConfig.contact.email}`, "_blank");
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (linksPopupRef.current && !linksPopupRef.current.contains(event.target)) {
        setShowLinksPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const Tooltip = ({ text }) => /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm whitespace-nowrap", children: text });
  const LinksPopup = () => /* @__PURE__ */ jsx(
    "div",
    {
      ref: linksPopupRef,
      className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800/90 w-30 backdrop-blur-sm rounded-lg p-4 shadow-xl",
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-2", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.linkedin,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsLinkedin, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "LinkedIn" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: userConfig.social.github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(BsGithub, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "GitHub" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `mailto:${userConfig.contact.email}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosMail, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Email" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${userConfig.contact.phone}`,
            className: "flex items-center gap-2 text-gray-300 hover:text-white",
            children: [
              /* @__PURE__ */ jsx(IoIosCall, { size: 20 }),
              /* @__PURE__ */ jsx("span", { children: "Call" })
            ]
          }
        )
      ] })
    }
  );
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 hidden md:flex justify-center pb-4 z-100", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-600/50 backdrop-blur-sm rounded-2xl p-2 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onGitHubClick,
          onMouseEnter: () => setHoveredIcon("github"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.github ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsGithub, { size: 35, className: "text-gray-100" }) }),
            hoveredIcon === "github" && /* @__PURE__ */ jsx(Tooltip, { text: "My Projects" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onNotesClick,
          onMouseEnter: () => setHoveredIcon("notes"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.notes ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsStickyFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "notes" && /* @__PURE__ */ jsx(Tooltip, { text: "Resume Notes" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleResumeClick,
          onMouseEnter: () => setHoveredIcon("resume"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative group",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-red-600 to-red-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.resume ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsFilePdf, { size: 35, className: "text-white" }) }),
            hoveredIcon === "resume" && /* @__PURE__ */ jsx(Tooltip, { text: "View Resume" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleCalendarClick,
          onMouseEnter: () => setHoveredIcon("calendar"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(BsCalendar, { size: 30, className: "text-white" }) }),
            hoveredIcon === "calendar" && /* @__PURE__ */ jsx(Tooltip, { text: "Schedule a Call" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSpotifyClick,
          onMouseEnter: () => setHoveredIcon("spotify"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-green-600 to-green-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.spotify ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(BsSpotify, { size: 35, className: "text-white" }) }),
            hoveredIcon === "spotify" && /* @__PURE__ */ jsx(Tooltip, { text: "Spotify Playlist" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleEmailClick,
          onMouseEnter: () => setHoveredIcon("email"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(IoIosMail, { size: 40, className: "text-white" }) }),
            hoveredIcon === "email" && /* @__PURE__ */ jsx(Tooltip, { text: "Email" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleLinksClick,
          onMouseEnter: () => setHoveredIcon("links"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-t from-purple-600 to-purple-400 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95", children: /* @__PURE__ */ jsx(FaLink, { size: 30, className: "text-white" }) }),
            hoveredIcon === "links" && /* @__PURE__ */ jsx(Tooltip, { text: "Contact Links" }),
            showLinksPopup && /* @__PURE__ */ jsx(LinksPopup, {})
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: onTerminalClick,
          onMouseEnter: () => setHoveredIcon("terminal"),
          onMouseLeave: () => setHoveredIcon(null),
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: `w-12 h-12 bg-gradient-to-t from-black to-black/60 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ease-out hover:scale-110 active:scale-95 ${activeApps.terminal ? "ring-2 ring-white/50" : ""}`, children: /* @__PURE__ */ jsx(RiTerminalFill, { size: 35, className: "text-white" }) }),
            hoveredIcon === "terminal" && /* @__PURE__ */ jsx(Tooltip, { text: "Terminal" })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: handleCloseResume }),
    /* @__PURE__ */ jsx(
      SpotifyPlayer,
      {
        isOpen: showSpotify,
        onClose: handleCloseSpotify,
        playlistId: userConfig.spotify.playlistId
      }
    )
  ] });
};

const NotesApp = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState("menu");
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleBackClick = () => {
    setActiveSection("menu");
  };
  const handleNextImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? -1) + 1) % images.length
    }));
  };
  const handlePrevImage = (itemId, images) => {
    setActiveImageIndices((prevIndices) => ({
      ...prevIndices,
      [itemId]: ((prevIndices[itemId] ?? 0) - 1 + images.length) % images.length
    }));
  };
  if (!isOpen) return null;
  const education = userConfig.education || [];
  const experience = userConfig.experience || [];
  const courses = userConfig.courses || [];
  const skills = userConfig.skills || [];
  const roles = userConfig.extraCurricularRoles || [];
  const activities = userConfig.extraCurricularActivities || [];
  const competitions = userConfig.competitions || [];
  const renderBackButton = () => /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: handleBackClick,
      className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
      children: [
        /* @__PURE__ */ jsx(FaChevronLeft, {}),
        /* @__PURE__ */ jsx("span", { children: "Back to Menu" })
      ]
    }
  );
  const renderImageCarousel = (itemId, images) => {
    const currentIndex = activeImageIndices[itemId] ?? 0;
    if (!images || images.length === 0 || currentIndex >= images.length) {
      return null;
    }
    return /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: images[currentIndex].url,
          alt: images[currentIndex].alt,
          className: "w-full h-48 object-contain bg-gray-900 rounded-lg"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 mb-3", children: images[currentIndex].description }),
      images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handlePrevImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "←"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
          currentIndex + 1,
          " / ",
          images.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleNextImage(itemId, images),
            className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
            children: "→"
          }
        )
      ] })
    ] });
  };
  const renderEducation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Education" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: education.map((item, index) => {
      const itemId = `education-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: [
          item.degree,
          " ",
          item.major && `- ${item.major}`
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExperience = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Professional Experience" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: experience.map((item, index) => {
      const itemId = `experience-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.company,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.period }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.technologies && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: item.technologies.map((tech, i) => /* @__PURE__ */ jsx("span", { className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300", children: tech }, i)) }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCourses = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Courses" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: courses.map((item, index) => {
      const itemId = `courses-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: item.description }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderSkills = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: skills.map((skill, index) => /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-gray-700 rounded text-sm text-gray-300", children: skill }, index)) }) })
  ] });
  const renderExtraCurricularRoles = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Roles" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: roles.map((item, index) => {
      const itemId = `roles-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.role }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderExtraCurricularActivities = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Extracurricular Activities" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: activities.map((item, index) => {
      const itemId = `activities-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-300 mb-2", children: [
          item.institution,
          ", ",
          item.location
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-400 mb-3", children: item.year }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderCompetitions = () => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    renderBackButton(),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "Competitions" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: competitions.map((item, index) => {
      const itemId = `competitions-${index}`;
      return /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200 mb-2", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-300 mb-2", children: item.description }),
        /* @__PURE__ */ jsxs("div", { className: "text-gray-400 mb-3", children: [
          "Achievement: ",
          item.achievement,
          " (",
          item.year,
          ")"
        ] }),
        item.images && item.images.length > 0 && renderImageCarousel(itemId, item.images)
      ] }, itemId);
    }) })
  ] });
  const renderMenu = () => /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-200 mb-6", children: "My Notes" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("competitions"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaTrophy, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Competitions" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my competition history and achievements" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("education"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaGraduationCap, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Education" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "View my educational background and qualifications" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("experience"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBriefcase, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Professional Experience" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Explore my professional work experience" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("roles"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaUsers, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Roles" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My involvement in student activities and roles" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("activities"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaPalette, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Extracurricular Activities" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "My participation in events and activities" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("courses"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaBookOpen, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Courses" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "Check out courses I have completed" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer hover:bg-gray-700/50 transition-colors",
          onClick: () => handleSectionClick("skills"),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsx(FaCode, { size: 28, className: "text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-200", children: "Skills" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: "See my technical skills and expertise" })
          ]
        }
      )
    ] })
  ] });
  const getWindowTitle = () => {
    switch (activeSection) {
      case "menu":
        return "Notes";
      case "education":
        return "Education Notes";
      case "experience":
        return "Experience Notes";
      case "courses":
        return "Courses Notes";
      case "skills":
        return "Skills Notes";
      case "roles":
        return "Extracurricular Roles Notes";
      case "activities":
        return "Extracurricular Activities Notes";
      case "competitions":
        return "Competitions Notes";
      default:
        return "Notes";
    }
  };
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: getWindowTitle(),
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.3),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col",
      initialSize: { width: 700, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-grow min-h-0 h-full", children: /* @__PURE__ */ jsxs("div", { className: "overflow-y-auto flex-grow min-h-0 p-4 md:p-6", children: [
        activeSection === "menu" && renderMenu(),
        activeSection === "education" && renderEducation(),
        activeSection === "experience" && renderExperience(),
        activeSection === "courses" && renderCourses(),
        activeSection === "skills" && renderSkills(),
        activeSection === "roles" && renderExtraCurricularRoles(),
        activeSection === "activities" && renderExtraCurricularActivities(),
        activeSection === "competitions" && renderCompetitions()
      ] }) })
    }
  );
};

const GitHubViewer = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedNodes, setExpandedNodes] = useState(/* @__PURE__ */ new Set());
  const [showStructure, setShowStructure] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const toggleNode = (path) => {
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(path)) {
      newExpandedNodes.delete(path);
    } else {
      newExpandedNodes.add(path);
    }
    setExpandedNodes(newExpandedNodes);
  };
  const renderFileTree = (node, path = "") => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const isExpanded = expandedNodes.has(currentPath);
    return /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center cursor-pointer hover:bg-gray-700/50 p-1 rounded",
          onClick: () => node.type === "directory" && toggleNode(currentPath),
          children: [
            node.type === "directory" ? /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }) : /* @__PURE__ */ jsx(FaFile, { className: "text-blue-400 mr-2" }),
            /* @__PURE__ */ jsx("span", { className: "text-gray-200", children: node.name })
          ]
        }
      ),
      node.type === "directory" && isExpanded && node.children && /* @__PURE__ */ jsx("div", { className: "ml-4", children: node.children.map((child) => renderFileTree(child, currentPath)) })
    ] }, currentPath);
  };
  const renderProjectStructure = (projectStructure) => {
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center p-1 rounded", children: [
        /* @__PURE__ */ jsx(FaFolder, { className: "text-yellow-500 mr-2" }),
        /* @__PURE__ */ jsx("span", { className: "text-gray-200 font-bold", children: projectStructure.root })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ml-4", children: projectStructure.children.map((child) => renderFileTree(child, projectStructure.root)) })
    ] });
  };
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowStructure(true);
    setActiveImageIndex(0);
  };
  const handleBackClick = () => {
    setShowStructure(false);
    setSelectedProject(null);
  };
  const handleNextImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex + 1 >= selectedProject.images.length ? 0 : prevIndex + 1
      );
    }
  };
  const handlePrevImage = () => {
    if (selectedProject) {
      setActiveImageIndex(
        (prevIndex) => prevIndex - 1 < 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    DraggableWindow,
    {
      title: showStructure ? selectedProject?.title || "GitHub Projects" : "GitHub Projects",
      onClose,
      initialPosition: {
        x: Math.floor(window.innerWidth * 0.2),
        y: Math.floor(window.innerHeight * 0.2)
      },
      className: "w-[93vw] md:max-w-4xl max-h-[90vh] flex flex-col",
      initialSize: { width: 800, height: 600 },
      children: /* @__PURE__ */ jsx("div", { className: "flex flex-col flex-grow min-h-0 h-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-y-auto flex-grow min-h-0 p-4 md:p-6", children: !showStructure ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-gray-200", children: "My Projects" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: userConfig.projects.map((project) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-gray-800/50 p-4 rounded-lg cursor-pointer transition-colors hover:bg-gray-700/50",
            onClick: () => handleProjectClick(project),
            children: [
              project.images && project.images.length > 0 && /* @__PURE__ */ jsx("div", { className: "w-full h-48 mb-3 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.images[0].url,
                  alt: project.images[0].alt,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-gray-200", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-400 mb-2", children: project.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-2", children: project.techStack.map((tech) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "px-2 py-1 bg-gray-700 rounded text-xs text-gray-300",
                  children: tech
                },
                tech
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.repoUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaGithub, {}),
                      /* @__PURE__ */ jsx("span", { children: "Repository" })
                    ]
                  }
                ),
                project.liveUrl && /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300",
                    onClick: (e) => e.stopPropagation(),
                    children: [
                      /* @__PURE__ */ jsx(FaExternalLinkAlt, {}),
                      /* @__PURE__ */ jsx("span", { children: "Live Demo" })
                    ]
                  }
                )
              ] })
            ]
          },
          project.id
        )) })
      ] }) : /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleBackClick,
            className: "flex items-center gap-2 text-gray-300 hover:text-gray-100 mb-4",
            children: [
              /* @__PURE__ */ jsx(FaChevronLeft, {}),
              /* @__PURE__ */ jsx("span", { children: "Back to Projects" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Project Structure" }),
            /* @__PURE__ */ jsx("div", { className: "font-mono text-sm", children: selectedProject && renderProjectStructure(selectedProject.structure) })
          ] }),
          selectedProject && selectedProject.images && selectedProject.images.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/50 rounded-lg p-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4 text-gray-200", children: "Screenshots" }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden mb-2", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: selectedProject.images[activeImageIndex].url,
                  alt: selectedProject.images[activeImageIndex].alt,
                  className: "w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300 mb-3", children: selectedProject.images[activeImageIndex].description }),
              selectedProject.images.length > 1 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handlePrevImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "←"
                  }
                ),
                /* @__PURE__ */ jsxs("span", { className: "text-gray-400", children: [
                  activeImageIndex + 1,
                  " / ",
                  selectedProject.images.length
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: handleNextImage,
                    className: "bg-gray-700 hover:bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center",
                    children: "→"
                  }
                )
              ] })
            ] }),
            selectedProject.repoUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.repoUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaGithub, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit GitHub Repository" })
                ]
              }
            ) }),
            selectedProject.liveUrl && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: selectedProject.liveUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-2 text-sm hover:text-blue-400 text-gray-300 bg-gray-700/50 p-2 rounded-lg",
                children: [
                  /* @__PURE__ */ jsx(FaLink, {}),
                  /* @__PURE__ */ jsx("span", { children: "Visit Live Site" })
                ]
              }
            ) })
          ] })
        ] })
      ] }) }) })
    }
  );
};

function Desktop({ initialBg, backgroundMap }) {
  const [currentBg, setCurrentBg] = useState(initialBg);
  const [showTerminal, setShowTerminal] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showGitHub, setShowGitHub] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeApps, setActiveApps] = useState({
    terminal: false,
    notes: false,
    github: false,
    resume: false,
    spotify: false
  });
  useEffect(() => {
    const lastBg = localStorage.getItem("lastBackground");
    const hasCompletedTutorial = localStorage.getItem("hasCompletedTutorial") === "true";
    if (lastBg === initialBg) {
      const bgKeys = Object.keys(backgroundMap);
      const availableBgs = bgKeys.filter((bg) => bg !== lastBg);
      const newBg = availableBgs[Math.floor(Math.random() * availableBgs.length)];
      setCurrentBg(newBg);
    }
    if (!hasCompletedTutorial) {
      setShowTutorial(true);
    }
    localStorage.setItem("lastBackground", currentBg);
  }, [initialBg, backgroundMap]);
  const resetTutorial = () => {
    setCurrentTutorialStep(0);
    setShowTutorial(true);
    localStorage.setItem("hasCompletedTutorial", "false");
  };
  const tutorialSteps = [
    {
      title: "Welcome to My Portfolio! 👋",
      content: "This is a macOS-inspired portfolio where you can explore my work and experience. Let me guide you through some of the features!",
      action: () => setShowNotes(true),
      buttonText: "Let's Begin"
    },
    {
      title: "Notes App",
      content: "This is my Notes app where you can find detailed information about my education, experience, and skills. Feel free to explore!",
      action: () => {
        setShowNotes(false);
        setShowGitHub(true);
      },
      buttonText: "Next: Projects"
    },
    {
      title: "GitHub Projects",
      content: "Here you can browse through my projects, see their structure, and check out the code. Each project has screenshots and links to the repository.",
      action: () => {
        setShowGitHub(false);
        setShowTerminal(true);
      },
      buttonText: "Next: Terminal"
    },
    {
      title: "Terminal",
      content: "The terminal is an interactive way to learn more about me. Try asking questions like 'What are your skills?' or 'Tell me about your experience'",
      action: () => {
        setShowTerminal(false);
      },
      buttonText: "Next: Explore"
    },
    {
      title: "Explore",
      content: "Now that you've seen the basics, feel free to explore the rest of the portfolio from the dock below. I've got some cool projects and information waiting for you!",
      action: () => {
        setShowTutorial(false);
      },
      buttonText: "Thanks! I Got it from here!"
    }
  ];
  const handleTutorialAction = () => {
    if (tutorialSteps[currentTutorialStep].action) {
      tutorialSteps[currentTutorialStep].action();
    }
    if (currentTutorialStep < tutorialSteps.length - 1) {
      setCurrentTutorialStep((prev) => prev + 1);
    } else {
      setShowTutorial(false);
      localStorage.setItem("hasCompletedTutorial", "true");
    }
  };
  const handleAppOpen = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: true
    }));
  };
  const handleAppClose = (app) => {
    setActiveApps((prev) => ({
      ...prev,
      [app]: false
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-screen h-screen overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${backgroundMap[currentBg]})` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(
      MacToolbar,
      {
        onTerminalClick: () => setShowTerminal(true),
        onShowTutorial: resetTutorial
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "relative z-0 flex items-center justify-center h-[calc(100vh-10rem)] md:h-[calc(100vh-1.5rem)] pt-6" }),
    /* @__PURE__ */ jsx(
      MobileDock,
      {
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onResumeClick: () => {
          setShowResume(true);
          handleAppOpen("resume");
        },
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        }
      }
    ),
    /* @__PURE__ */ jsx(
      DesktopDock,
      {
        onTerminalClick: () => {
          setShowTerminal(true);
          handleAppOpen("terminal");
        },
        onNotesClick: () => {
          setShowNotes(true);
          handleAppOpen("notes");
        },
        onGitHubClick: () => {
          setShowGitHub(true);
          handleAppOpen("github");
        },
        activeApps
      }
    ),
    /* @__PURE__ */ jsx(NotesApp, { isOpen: showNotes, onClose: () => {
      setShowNotes(false);
      handleAppClose("notes");
    } }),
    /* @__PURE__ */ jsx(GitHubViewer, { isOpen: showGitHub, onClose: () => {
      setShowGitHub(false);
      handleAppClose("github");
    } }),
    /* @__PURE__ */ jsx(ResumeViewer, { isOpen: showResume, onClose: () => {
      setShowResume(false);
      handleAppClose("resume");
    } }),
    /* @__PURE__ */ jsx(MacTerminal, { isOpen: showTerminal, onClose: () => {
      setShowTerminal(false);
      handleAppClose("terminal");
    } }),
    showTutorial && /* @__PURE__ */ jsx("div", { className: "fixed right-4 top-1/2 transform -translate-y-1/2 z-50", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-800/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-xl max-w-xs animate-fade-in", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: tutorialSteps[currentTutorialStep].title }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300 mb-4", children: tutorialSteps[currentTutorialStep].content }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-400", children: [
          currentTutorialStep + 1,
          " of ",
          tutorialSteps.length
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleTutorialAction,
            className: "text-sm text-blue-400 hover:text-blue-300",
            children: tutorialSteps[currentTutorialStep].buttonText
          }
        )
      ] })
    ] }) })
  ] });
}

const macBackground2 = new Proxy({"src":"/benWebsite/_astro/mac-background2.DAWzICtV.jpg","width":6016,"height":3384,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/behnamfarhadi/portfolio/src/assets/images/mac-background2.jpg";
							}
							
							return target[name];
						}
					});

const $$LandingPage = createComponent(async ($$result, $$props, $$slots) => {
  const backgrounds = [macBackground1, macBackground2, macBackground3];
  function getRandomBackground() {
    return `bg-${Math.floor(Math.random() * backgrounds.length) + 1}`;
  }
  const optimizedBackgrounds = await Promise.all(
    backgrounds.map(
      (bg) => getImage({
        src: bg,
        width: 3500
      })
    )
  );
  const backgroundMap = Object.fromEntries(
    optimizedBackgrounds.map((bg, index) => [`bg-${index + 1}`, bg.src])
  );
  return renderTemplate`${renderComponent($$result, "AppLayout", Desktop, { "client:load": true, "initialBg": getRandomBackground(), "backgroundMap": backgroundMap, "client:component-hydration": "load", "client:component-path": "/Users/behnamfarhadi/portfolio/src/layouts/AppLayout", "client:component-export": "default" })}`;
}, "/Users/behnamfarhadi/portfolio/src/components/LandingPage.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
  Customize these values for your portfolio:
  - title: Your name and role
  - description: Brief description of your expertise
  - canonical: Your website URL
  - openGraph: Social media sharing metadata
-->${renderComponent($$result, "Layout", $$Layout, { "title": userConfig.seo.title, "description": userConfig.seo.description, "canonical": userConfig.website, "openGraph": {
    url: userConfig.website,
    title: userConfig.seo.title,
    description: userConfig.seo.description,
    site_name: userConfig.name
  } }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LandingPage", $$LandingPage, {})} ` })}`;
}, "/Users/behnamfarhadi/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/behnamfarhadi/portfolio/src/pages/index.astro";
const $$url = "/benWebsite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
