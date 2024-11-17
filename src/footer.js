// Copyright (C) 2024 Jason C. Nucciarone
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { BaseElement } from "./base.js";

// Footer with social media information.
class SocialMediaFooter extends BaseElement {
    static properties = {
        github: { attribute: false },
        mastodon: { attribute: false },
        linkedin: { attribute: false },
        matrix: { attribute: false },
        email: { attribute: false },
    };

    constructor() {
        super();
        this.github = "https://github.com/nuccitheboss";
        this.mastodon = "https://mast.hpc.social/@nuccitheboss";
        this.linkedin = "https://www.linkedin.com/in/jasonnucci/";
        this.matrix = "https://matrix.to/#/@nuccitheboss:matrix.org";
        this.email = "mailto:nuccitheboss@ubuntu.com";
    }

    /**
     * Create social media button using preseeded link.
     * @param String link    Link to profile or contact info.
     * @param String icon    Icon to use for generated button.
     */
    createSocialButton(link, icon) {
        return html`
            <a class="social-btn" href=${link} target="_blank">
                <i class="bi bi-${icon} p-3 social-icon"></i>
            </a>
        `;
    }

    render() {
        return html`
            <footer id="footer">
                <div class="container-fluid">
                    <div class="p-3">
                        ${this.createSocialButton(this.github, "github")}
                        ${this.createSocialButton(this.mastodon, "mastodon")}
                        ${this.createSocialButton(this.linkedin, "linkedin")}
                        ${this.createSocialButton(this.matrix, "ubuntu")}
                        ${this.createSocialButton(
                            this.email,
                            "envelope-plus-fill"
                        )}
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define("social-footer", SocialMediaFooter);
