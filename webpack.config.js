const path = require('path');

module.exports = {
    "mode": "development",
    "entry": "./src/views/index.jsx",
    "output": {
        "path": path.join(__dirname, 'static/webpack'),
        "filename": "bundle.js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["env", "react"]
                    }
                }
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    {
                        "loader": "postcss-loader",
                        "options": {
                            "ident": "postcss",
                            "plugins": (loader) => [require('postcss-import')(),require('postcss-cssnext')(),require('autoprefixer')(),require('cssnano')()]
                        }
                    }
                ]
            },
			{
				"test": /\.png$/,
				"use": [
					"file-loader"
				]
			}
        ]
    },
	"devServer": {
		"publicPath": path.join(__dirname, 'static/webpack'),
		"port": 9000
	}
}
