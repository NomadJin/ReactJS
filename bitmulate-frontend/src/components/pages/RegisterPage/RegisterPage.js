import React, { Component } from 'react'
import { PageTemplate, RegisterTemplate, PolyBackground, Paper } from '../../../components'
import { HeaderContainer } from '../../../containers'

class RegisterPage extends Component {
    state = {
        half: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                half: true
            })
        })
    }

    render() {
        const { half } = this.state
        return (
            <PageTemplate
                header={<HeaderContainer/>}>
                <PolyBackground fixed half={half}>
                </PolyBackground>
                <Paper>
                    <RegisterTemplate>회원 등록 템플릿...</RegisterTemplate>
                </Paper>
            </PageTemplate>
        )
    }
}

export default RegisterPage