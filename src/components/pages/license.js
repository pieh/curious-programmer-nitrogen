import React from "react"
import Layout from "../layout"
import Anchor from "../anchor"
import License from "../license"
import ReadingPane from "../readingPane"
import { H2 } from "../heading"
import "../../styles/page.scss"

const LicensePage = () => (
  <Layout className="license-page" footer={true}>
    <ReadingPane heading="License">
      <section>
        <H2>The Code</H2>
        <p>
          <strong>Applies to</strong> all code written explicitly by Clarice
          Bouwer. Third-party libraries and code snippets are exempt from this
          license. Such snippets will be explicitly referenced in a link to this
          document.
        </p>
        <h3>The MIT License, unless otherwise stated</h3>
        <p>Copyright &copy; {new Date().getFullYear()} Curious Programmer</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </section>
      <section>
        <h2>The Content</h2>
        <h3>Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)</h3>
        <License />
        You are free to:
        <ul>
          <li>
            <strong>Share</strong> — copy and redistribute the material in any
            medium or format
          </li>
          <li>
            <strong>Adapt</strong> — remix, transform, and build upon the
            material for any purpose, even commercially.
          </li>
        </ul>
        Curious Programmer cannot revoke these freedoms as long as you follow
        the license terms:
        <ul>
          <li>
            <strong>Attribution</strong> — You must give appropriate credit,
            provide a link to the license, and indicate if changes were made.
            You may do so in any reasonable manner, but not in any way that
            suggests the licensor endorses you or your use.
          </li>
          <li>
            <strong>ShareAlike</strong> — If you remix, transform, or build upon
            the material, you must distribute your contributions under the same
            license as the original.
          </li>
        </ul>
        <p>
          You may not apply legal terms or technological measures that legally
          restrict others from doing anything the license permits.
        </p>
        <p className="emphasize">
          This is just a taste. You'll probably need to read the{" "}
          <Anchor to="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
            full license
          </Anchor>
          .
        </p>
      </section>
      <section>
        <h2>Photography</h2>
        <p className="emphasize">
          I use <Anchor to="https://picsum.photos/">Lorem Picsum</Anchor> which
          provides backgrounds by{" "}
          <Anchor to="https://unsplash.com/">Unsplash</Anchor>. The{" "}
          <Anchor to="https://unsplash.com/license">License</Anchor> states that
          all photos can be used for free.
        </p>
        <p>
          All photos can be used for commercial and noncommercial purposes. You
          do not need to ask permission from or provide credit to the
          photographer or Unsplash, although it is appreciated.
        </p>
        <p>
          More precisely, Unsplash grants you an irrevocable, nonexclusive,
          worldwide copyright license to download, copy, modify, distribute,
          perform, and use photos from Unsplash \ for free, including for
          commercial purposes, without permission from or attributing the
          photographer or Unsplash. This license does not include the right to
          compile photos from Unsplash to replicate a similar or competing
          service.
        </p>
      </section>
    </ReadingPane>
  </Layout>
)

export default LicensePage
