require("dotenv").config();
const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { findPort } = require("dev-server-ports");

const PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = "localhost";

const PORT_IN_USE_PROMPT = `${ chalk.blue("Be sure to update the following configurations if you proceed with the port change.") }

    1. Update the ${ chalk.bgBlack("PORT") } in ${ chalk.bgBlack(".env") } file in the app root.
    2. Update the signInRedirectURL & signOutRedirectURL in ${ chalk.bgBlack("src/config.json") }.
    3. Go to the Asgardeo console and navigate to the protocol tab of your application:
        - Update the Authorized Redirect URL.
        - Update the Allowed Origins.
`;

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        historyApiFallback: true,
        https: true,
        host: HOST,
        inline: true,
        port: findPort(PORT, HOST, false, {
            extensions: {
                BEFORE_getProcessTerminationMessage: () => {
                  return PORT_IN_USE_PROMPT;
                }
            }
        })
    },
    devtool: "source-map",
    entry: ["./src/App.jsx"],
    module: {
        rules: [
            {
                test: /\.(tsx|ts|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|cur|gif|eot|ttf|woff|woff2)$/,
                use: ["url-loader"]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            }
        ]
    },
    node: {
        fs: "empty"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    }
};
