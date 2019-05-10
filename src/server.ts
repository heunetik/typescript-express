import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    // tslint:disable-next-line:no-console
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    // tslint:disable-next-line:no-console
    console.log("  Press CTRL-C to stop\n");
});

export default server;
