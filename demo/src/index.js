import React, {Component} from 'react'
import {injectGlobal} from 'emotion'
import {render} from 'react-dom'
import plus from '@cmds/icons/es/plus'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

import Button from '../../src'

class Demo extends Component {
    render() {
        return <div>
            <h1>Button Demo</h1>
            <h2>
                Default
            </h2>
            <Button>Click here</Button>
            <h2>
                With icon
            </h2>
            <Button
                icon={plus}
            >
                Create
            </Button>
            <h2>
                Hover / focus
            </h2>
            <Button
                icon={plus}
                hover
            >
                Create
            </Button>
            <h2>
                Active
            </h2>
            <Button
                icon={plus}
                active
            >
                Create
            </Button>
            <h2>
                With icon, without text
            </h2>
            <Button
                icon={plus}
            />
            <h2>
                Highlighted
            </h2>
            <Button
                icon={plus}
                highlighted
            >
                Create
            </Button>
            <h2>
                Primary
            </h2>
            <Button
                icon={plus}
                primary
            >
                Create
            </Button>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
