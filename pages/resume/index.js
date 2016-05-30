import React from 'react'
import Markdown from 'react-remarkable'
import ReactMarkdown from 'react-markdown'
import stripIndent from 'strip-indent'
import { Icon } from 'react-fa'
import { linksById } from '../../meta/nav'
// import AnchorJS from 'anchor-js'

export default class Resume extends React.Component {

  componentDidMount () {
    // Waiting on support for anchor links in Gatsby
    // @see https://github.com/gatsbyjs/gatsby/issues/302
    // AnchorJS.anchors.add()
  }

  render () {
    return (
      <div>
        <h1 className="adj-page-heading">
          <Icon name={linksById.resume.icon} className="adj-menu-item-icon" />
          {linksById.resume.name}
        </h1>

        <div className="adj-page">

          <p>
          Talented full-stack web developer & software engineer
          with 5+ years of experience in web technologies and e-commerce.
          Passion for modern front end.
          Open-source contributor & creator.
          Some DevOps, UI/UX, PM & QA.
          </p>


          <h2>Senior Programmer Analyst @ Jostens</h2>
          <h3>June 2013 &ndash; Present</h3>

          <p>Full-stack web developer on the enterprise e-commerce team.</p>

          <ReactMarkdown source={stripIndent(`
            #### Promotions

            - From Programmer Analyst - February 2016
            - From Associate Programmer Analyst - January 2014

            #### Work

            - Develop new single-page web app with AngularJS and Bootstrap 3 using a REST API backed by LAMP stack, deployed via AWS OpsWorks on the Amazon cloud: SchoolWay https://webapp.myschoolway.com/
            - New responsive design landing pages with Bootstrap 3 via Rhytymyx CMS to re-energize brand. New responsive design e-commerce web experience, including product configurators - Bootstrap, Backbone.js, etc. with legacy IE8 support - mobile sales increased from ~5% to 20+%.
            - Web developer on new point of sale (POS) iOS hybrid app for sales reps on iPads. New JSON API web services backed by Java, Spring MVC, MyBatis, and Oracle PL/SQL, and lead the effort to utilize native/web app integration to share existing SPA web code to reduce costs and accelerate project timeline.
            - Develop tooling for management of images using Groovy and ImageMagick.
            - Maintenance on Flash/Flex/AIR Jewelry designer web apps and designed product image rendering services.
            - Integrate website with Salesforce Live Agent customer service chat solution.
            - Full-stack production support.

            Technologies: JavaScript, Backbone.js, jQuery, Grunt, Bootstrap, CSS, HTML, Java, Ant, Maven, Groovy, Tomcat, Spring MVC, Oracle PL/SQL, MS SQL Server, Solr, JUnit, Spock, Geb, Bash, Batch scripting, hybrid web/native mobile apps, AngularJS, REST APIs, PHP, Apache, LAMP, Flash/ActionScript/Flex/AIR/SWF/Animate, Classic ASP/VBScript, Node.js, XML, JSON, SOAP, JAXB, JiBX, Hudson/Jenkins, Splunk, AppDynamics, JIRA, JSPWiki, Subversion, WebSVN, Eclipse, IntelliJ IDEA, etc.
          `)} />

          <h2>Other</h2>

          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

          <ol>
             <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
             <li>Aliquam tincidunt mauris eu risus.</li>
             <li>Vestibulum auctor dapibus neque.</li>
          </ol>

          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>

          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>


        </div>
      </div>
    )
  }
}
