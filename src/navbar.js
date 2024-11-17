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

// Provide navigation for site.
class NavBar extends BaseElement {
    render() {
        return html`
            <header>
                <nav
                    class="navbar navbar-expand-lg fixed-top navbarScroll"
                    data-bs-theme="dark"
                >
                    <div class="container">
                        <a class="navbar-brand" href="#">Jason C. Nucciarone</a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services"
                                        >Services</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio"
                                        >Portfolio</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact"
                                        >Contact</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}
customElements.define("nav-bar", NavBar);
