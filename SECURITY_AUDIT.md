# Security audit result

**PASS — clean public website export reviewed before GitHub publication.**

- **Secrets:** Gitleaks scanned the current export and its one-commit Git history; no leaks were found. A separate filename and content scan found no credentials, keys, or local user paths.
- **Sensitive files:** No `.env` files, logs, databases, dumps, private research data, financial models, or source maps are included in tracked files or the production build.
- **Application source:** The repository contains only the Astro website, its public content and dependencies, approved website media, the QA script, and the Pages workflow. It contains no caregiver, responder, backend, or AI application source.
- **Git history:** The history starts with one clean website-only commit. No history from the wider WISAM workspace was copied.
- **Claims and assets:** Removed local asset and claim source paths, non-public claim guardrail notes, app-specific TypeScript exclusions, and demo-token implementation details. Claim qualifiers used on the site remain.
- **Public media:** The 18 raster assets have no EXIF, IPTC, or XMP metadata. SVG assets contain static artwork without script or remote asset references. Team portraits are the user-supplied images prepared for the public team section.
- **Dependencies:** `npm audit` reported zero known vulnerabilities.
- **Build output:** The static build contains 16 intended pages, no source maps, and no paths or identifiers from the local WISAM workspace.
- **Excluded from publication:** Application code, research/design documents, media-processing scripts, Cloudflare configuration, local build state, dependencies, and generated build output.

The repository and all future commits are public. Review changes before pushing updates.
