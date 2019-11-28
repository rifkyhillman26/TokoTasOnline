import React from 'react'
import { Image, Row } from 'react-bootstrap'

class Jualan extends React.Component {
    render() {
        return(
            <div>
                <Row>
                    <div className="p-4 ml-5 border shadow-sm p-3 mb-5 bg-white rounded">
                        <Image src="https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
                    </div>
                    <div className="ml-1 mt-5">
                        <h1>Tas kekinian</h1>
                    </div>
                </Row>
            </div>
        )
    }
}


export default Jualan