import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js", //имя файла сборки
            path: paths.build, // путь для сборки (папка)
            clean: true //очистка старых файлов сборки
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}