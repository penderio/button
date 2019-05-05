import React, {Component} from 'react'
import {Canvas, Box, Heading, Paragraph} from '@cmds/demo-utils'
import {injectGlobal} from 'emotion'
import {render} from 'react-dom'
import plus from '@cmds/icons/lib/plus'
import trash from '@cmds/icons/lib/trash'

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
                    icon={plus}
                    primary
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Highlighted
            </Paragraph>
            <Box>
                <Button
                    icon={plus}
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
                    icon={plus}
                >
                    Create
                </Button>
            </Box>
            <Paragraph>
                Hover / focus
            </Paragraph>
            <Box>
                <Button
                    icon={plus}
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
                    icon={plus}
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
                    icon={plus}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
