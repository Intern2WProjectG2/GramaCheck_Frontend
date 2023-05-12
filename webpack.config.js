require("dotenv").config();
const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
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
    entry: "./src/App.jsx",
    output: {
        path: path.resolve(__dirname, "public/dist"),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: ['url-loader'],
            }
        ]
    },
    devServer: {
        open: true,
        host: HOST,
        historyApiFallback: true,
        hot: true,
        server: 'https',
        port: findPort(PORT, HOST, false, {
            extensions: {
                BEFORE_getProcessTerminationMessage: () => {
                  return PORT_IN_USE_PROMPT;
                }
            }
        })
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new Dotenv()
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"]
    }
};

/**
 * Webpack configuration file 
*/