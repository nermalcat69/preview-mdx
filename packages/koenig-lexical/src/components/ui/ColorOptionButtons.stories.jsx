import React from 'react';
import {ColorOptionButtons} from './ColorOptionButtons';

const story = {
    title: 'Generic/Color option buttons',
    component: ColorOptionButtons,
    parameters: {
        status: {
            type: 'uiReady'
        }
    },
    argTypes: {
        selectedName: {control: 'select', options: ['grey', 'blue', 'green', 'yellow', 'red', 'pink', 'purple']}
    }
};
export default story;

const Template = (args) => {
    return (
        <div className="w-[240px]">
            <ColorOptionButtons {...args} />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    selectedName: 'grey',
    buttons: [
        {
            label: 'Grey',
            name: 'grey',
            colorClass: 'bg-grey'
        },
        {
            label: 'Blue',
            name: 'blue',
            colorClass: 'bg-blue'
        },
        {
            label: 'Green',
            name: 'green',
            colorClass: 'bg-green'
        },
        {
            label: 'Yellow',
            name: 'yellow',
            colorClass: 'bg-yellow'
        },
        {
            label: 'Red',
            name: 'red',
            colorClass: 'bg-red'
        },
        {
            label: 'Pink',
            name: 'pink',
            colorClass: 'bg-pink'
        },
        {
            label: 'Purple',
            name: 'purple',
            colorClass: 'bg-purple'
        }
    ]
};
