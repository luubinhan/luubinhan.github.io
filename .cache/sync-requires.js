const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-service-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\templates\\service.js"))),
  "component---src-templates-team-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\templates\\team.js"))),
  "component---src-templates-testimonial-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\templates\\testimonial.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\404.js"))),
  "component---src-pages-contact-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\contact\\index.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\index.js"))),
  "component---src-pages-services-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\services\\index.js"))),
  "component---src-pages-team-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\team\\index.js"))),
  "component---src-pages-testimonials-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\luubinhan.github.io\\src\\pages\\testimonials\\index.js")))
}

