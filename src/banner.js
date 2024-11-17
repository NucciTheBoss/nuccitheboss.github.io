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

// Hero banner shows name and allegheny national forest
// when visitors first open web page
class HeroBanner extends BaseElement {
    render() {
        return html`
            <section class="hero-bgimage" id="home">
                <div class="container-fluid">
                    <div class="row">
                        <div
                            class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text"
                        >
                            <h2 class="hero-title">~$ whois nuccitheboss</h2>
                            <p class="hero-content">
                                I'm an HPC engineer building the next generation
                                of open source supercomputing machines
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
}
customElements.define("hero-banner", HeroBanner);
