import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1, H2 } from "../components/heading"
import Credit from "../components/credit"
import { StyledExternalLink } from "../components/link"

const CreditsPage = () => (
  <Layout>
    <SEO title="Credits">
      Get an idea of the tech and resources I use
      to make this site look and act the way it does.
    </SEO>
    <H1>Credits</H1>
    
    <div>
      <H2>Hosting</H2>
      <Credit 
        to="https://www.cloudafrica.net/"
        title="CloudAfrica"
      >
        hosts my cloud server which runs the Solr service to power the search 
        on this website.
      </Credit>
      <Credit
        to="https://netlify.com"
        title="Netify"
      >
        hosts my website for an all-in-one workflow that combines global deployment, 
        continuous integration and automatic HTTPS.
      </Credit>
    </div>

    <div>
      <H2>Code</H2>
      <Credit
        to="https://www.gatsbyjs.com/"
        title="Gatsby"
      >
        is the super cool tech I use to generate my website. 
        <ul>
          <li>
            I implemented the <StyledExternalLink to="https://github.com/Vagr9K/gatsby-advanced-starter">Vagr9K/gatsby-advanced-starter</StyledExternalLink>
            skeleton.
          </li>
          <li>
            <StyledExternalLink to="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/">gatsby-remark-prismjs</StyledExternalLink> 
            adds syntax highlighting to my code blocks in markdown files.
          </li>
        </ul>
        
        I use the
        <StyledExternalLink to="https://github.com/Vagr9K/gatsby-advanced-starter">Vagr9K/gatsby-advanced-starter</StyledExternalLink> 
        skeleton. 
      </Credit>
    </div>


    <div className="credits-container container">
      <section>
        <h2>Code</h2>
        <Credit to="https://www.gatsbyjs.org/" title="gatsbyjs.org">
          Gatsby lets you build blazing fast sites with your data, whatever
          the source. Liberate your sites from legacy CMSs and fly into the
          future.
        </Credit>
        <Credit to="https://github.com/Vagr9K/gatsby-advanced-starter" title="Vagr9K/gatsby-advanced-starter">
          A high performance skeleton starter for GatsbyJS that focuses on SEO/Social features/development environment.
        </Credit>
        <Credit
          to="https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/"
          title="gatsby-remark-prismjs"
        >
          Adds syntax highlighting to code blocks in markdown files using
          PrismJS.
        </Credit>
        <Credit
          to="https://www.gatsbyjs.org/packages/gatsby-remark-embed-gist/"
          title="gatsby-remark-embed-gist"
        >
          Embed Gist snippets in markdown.
        </Credit>
        <Credit
          to="https://www.gatsbyjs.org/packages/gatsby-remark-embed-youtube/"
          title="gatsby-remark-embed-youtube"
        >
          Embed a YouTube Videos in markdown.
        </Credit>
        <Credit
          to="https://gist.github.com/oliveratgithub/0bf11a9aff0d6da7b46f1490f86a71eb"
          title="oliveratgithub/emojis.json"
        >
          Emoji-list with emojis, names, shortcodes, unicode and html entities [massive list]
        </Credit>
      </section>
      <section>
        <h2>Icons</h2>

        <h3>Technology brands on About page</h3>

        <Credit
          to="https://www.brandeps.com"
          title="BrandEPS"
        >
          Database of brand logos and icons.
        </Credit>

        <h3>Menu bar</h3>

        <Credit
          to="https://www.flaticon.com/free-icon/musica-searcher_70376"
          title="Egor Rumyantsev"
        >
          Music Searcher free icon
        </Credit>

        <Credit
          to="https://www.flaticon.com/free-icon/menu_483345"
          title="Those Icons"
        >
          Menu free icon
        </Credit>
        <p>
          Icons made by <a target="_blank" rel="nofollow noopenner noreferrer" href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a target="_blank" rel="nofollow noopenner noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a target="_blank" rel="nofollow noopenner noreferrer" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.
          <br />
          Icons made by <a target="_blank" rel="nofollow noopenner noreferrer" href="https://www.flaticon.com/authors/egor-rumyantsev" title="Egor Rumyantsev">Egor Rumyantsev</a> from <a target="_blank" rel="nofollow noopenner noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a target="_blank" rel="nofollow noopenner noreferrer" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</p>

        <h3>Contact me</h3>

        <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</p>
        <Credit
          to="https://www.flaticon.com"
          title="flaticon"
        >
          Pixel perfect icons
        </Credit>

        <ul>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/gmail_732200">Gmail</StyledExternalLink></li>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/rss_733569">RSS</StyledExternalLink></li>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/twitter_733579">Twitter</StyledExternalLink></li>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/overflowing_732248">StackOverflow</StyledExternalLink></li>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/github_733609">GitHub</StyledExternalLink></li>
          <li><StyledExternalLink to="https://www.flaticon.com/free-icon/linkedin_733561">LinkedIn</StyledExternalLink></li>
        </ul>
      </section>
      <section>
        <h2>Photography</h2>
        <Credit to="https://picsum.photos" title="picsum.photos">
          Lorem Ipsum... but for photos.
        </Credit>
      </section>
      <section>
        <h2>Tools</h2>
        <Credit to="https://code.visualstudio.com/" title="Microsoft Visual Studio Code">
          Visual Studio Code is an open-source and free source code editor developed
          by Microsoft for Windows, Linux and macOS. It includes support for debugging,
          embedded Git control, syntax highlighting, intelligent code completion, snippets,
          and code refactoring.
        </Credit>
        <Credit to="https://pixlr.com/editor/" title="pixlr.com">
          Pixlr is a cloud-based set of image tools and utilities, including a number of
          photo editors, a screen recorder browser extension, and a photo sharing service.
          The suite was intended for non-professionals, however the apps range from simple
          to advanced photo editing.
        </Credit>
        <Credit to="https://www.base64-image.de/" title="Base64 Image">
          Convert your images to Base64.
        </Credit>
        <Credit to="http://vectorpaint.yaks.co.nz/" title="Vector Paint">
          SVG editor: Create unique artwork with shapes, color gradients and layers. Use Vector Paint for posters, web graphics or diagrams.
        </Credit>
        <Credit to="https://editor.method.ac" title="Method draw">
          SVG editor: Edit and save images.
        </Credit>
      </section>
      <section>
        <h2>Privacy Policy</h2>
        <Credit to="https://www.iubenda.com" title="iubenda">
          Attorney-level solutions to make your websites and apps compliant
          with the law across multiple countries and legislations.
        </Credit>
      </section>
    </div>
  </Layout>
)

export default CreditsPage


