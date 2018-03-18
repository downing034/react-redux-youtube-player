import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

/*
"watch": "webpack --mode development -w --config webpack.common.js",
"build": "webpack --mode production -p --config webpack.config.js"
*/
