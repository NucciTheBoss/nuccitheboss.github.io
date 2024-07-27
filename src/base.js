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

import { LitElement } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

// `BaseElement` overrides the render root so that bootstrap styles
// can be applied to the main site. Web components isolate the CSS
// that they use to render themselves, so by overriding the virtual DOM
// we're able to apply a global style from Bootstrap.
export class BaseElement extends LitElement {
    createRenderRoot() {
        return this;
    }
}
