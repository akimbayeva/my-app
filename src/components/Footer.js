import React from 'react';
import { Button, Panel } from 'react-bootstrap';

const Footer = () => (
    <Panel>
        <div >Show: </div> 
        <div >All, Active, Completed</div> 
        <Button>Close</Button>
        <Button bsStyle="primary">Save</Button>
    </Panel>
);

export default Footer;