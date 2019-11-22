import React, { Component } from 'react'
import { Navbar, NavItem, Icon, 
    Collapsible, CollapsibleItem, Badge,
    Row, Card, Col, CardTitle, Button, MediaBox
    } from 'react-materialize'
import './style/sass/prateleira.scss'

class Prateleira extends Component{
    render(){
        return(
            <div>
                <Navbar alignLinks="left">
                <NavItem href="get-started.html">
                        <Icon large>
                            book
                        </Icon>
                    </NavItem>
                    <NavItem href="get-started.html">
                        <Icon small>
                            search
                        </Icon>
                    </NavItem>
                </Navbar>

                <Collapsible>
                    <CollapsibleItem header="Currently Reading" icon={<Icon>menu_book</Icon>} >
                    <Badge className="red" newIcon>
                        4
                    </Badge>
                    <Row>
                        <Col m={4} s={4} m={4} l={4} xl={4}>
                            <Card header={[<CardTitle />, 
                                <MediaBox>
                                    <img src="http://livrariaconcreta.com.br/wp-content/uploads/2016/03/livro-azul_andrew-lang_CAPA_21_09_2017_FINAL_CURVAS-01.jpg" width="407rem" alt="" />
                                </MediaBox>]
                                } actions={[<Button
                                                floating
                                                small
                                                className="red"
                                                waves="light"
                                                icon={<Icon small>
                                                    arrow_drop_down
                                                </Icon>}
                                                />]}
                                                                    
                            >
                            </Card>
                        </Col>
                        
                    </Row>
                    </CollapsibleItem>
                    <CollapsibleItem header="Wan to Read" icon={<Icon>collections_bookmarks</Icon>}>
                        Yeah, you do seem to have a little 'shit creek' action going.
                    </CollapsibleItem>
                    <CollapsibleItem header="Read" icon={<Icon>bookmarks</Icon>}>
                        You know, FYI, you can buy a paddle. Did you not plan for this contingency?
                    </CollapsibleItem>
                </Collapsible>
            </div>
        )
    }
}

export default Prateleira