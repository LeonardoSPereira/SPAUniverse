export class Router {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(e) {
        e = e || window.event;
        e.preventDefault();

        window.history.pushState({}, "", e.target.href);

        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        fetch(route)
         .then(data => data.text())
          .then(html => {
            document.querySelector("#app").innerHTML = html
          })
    }

}