const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-service-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\templates\\service.js"))),
  "component---src-templates-team-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\templates\\team.js"))),
  "component---src-templates-testimonial-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\templates\\testimonial.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\404.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\contact\\index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\index.js"))),
  "component---src-pages-services-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\services\\index.js"))),
  "component---src-pages-team-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\team\\index.js"))),
  "component---src-pages-testimonials-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io-source\\src\\pages\\testimonials\\index.js")))
}

