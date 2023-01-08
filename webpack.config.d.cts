declare function _exports(env: any, options: any): {
    entry: string;
    output: {
        clean: boolean;
        assetModuleFilename: string;
    };
    module: {
        rules: ({
            test: RegExp;
            use: string;
            exclude: RegExp;
            type?: undefined;
        } | {
            test: RegExp;
            use: string[];
            exclude?: undefined;
            type?: undefined;
        } | {
            test: RegExp;
            type: string;
            use?: undefined;
            exclude?: undefined;
        })[];
    };
    resolve: {
        extensions: string[];
    };
    devServer: {
        static: string;
    };
    plugins: HtmlWebpackPlugin[];
};
export = _exports;
import HtmlWebpackPlugin = require("html-webpack-plugin");
//# sourceMappingURL=webpack.config.d.cts.map