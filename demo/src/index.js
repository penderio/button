import React, {Component} from 'react'
import {Canvas, Box, Heading, Paragraph} from '@pndr/demo-utils'
import {injectGlobal} from 'emotion'
import {render} from 'react-dom'
import plus from '@pndr/icons/lib/plus'
import trash from '@pndr/icons/lib/trash'

const plus2 = props => (
    <svg {...props} viewBox="0 0 16 16">
        <path d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0z" fillRule="evenodd"/>
    </svg>
)

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import Button from '../../src'

class Demo extends Component {
    render() {
        return <Canvas>
            <Paragraph>
                Default
            </Paragraph>
            <Box>
                <Button>Click here</Button>
            </Box>
            <Paragraph>
                Primary
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    primary
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Primary - hover
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    primary
                    hover
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Primary - focus
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    primary
                    focus
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Primary - disabled
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    primary
                    disabled
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Highlighted
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    highlighted
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Disabled
            </Paragraph>
            <Box>
                <Button
                    icon={trash}
                    disabled
                >
                    Disabled
                </Button>
            </Box>
            <Paragraph>
                Danger
            </Paragraph>
            <Box>
                <Button
                    icon={trash}
                    danger
                >
                    Remove
                </Button>
            </Box>
            <Paragraph>
                With icon
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Hover / focus
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    hover
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Active
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                    active
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                With icon, without text
            </Paragraph>
            <Box>
                <Button
                    icon={plus2}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
