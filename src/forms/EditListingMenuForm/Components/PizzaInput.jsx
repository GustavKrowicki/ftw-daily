import React from 'react'

export const PizzaInput = (props) => {
     const menuLabelMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menuLabel',
        });
        const menuPlaceholderMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menuPlaceholder',
        });

        const menu2LabelMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menu2Label',
        });
        const menu2PlaceholderMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menu2Placeholder',
        });

        const menu3LabelMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menu3Label',
        });
        const menu3PlaceholderMessage = intl.formatMessage({
            id: 'EditListingMenuForm.menu3Placeholder',
    }); 
    return (
        <div>
            <FieldTextInput
                id="menu"
                name="menu"
                className={props.cssMenu}
                type="textarea"
                label={menuLabelMessage}
                placeholder={menuPlaceholderMessage}
            />
            <FieldTextInput
                id="menu2"
                name="menu2"
                className={props.cssMenu}
                type="textarea"
                label={menu2LabelMessage}
                placeholder={menu2PlaceholderMessage}
            />
            <FieldTextInput
                id="menu3"
                name="menu3"
                className={props.cssMenu}
                type="textarea"
                label={menu3LabelMessage}
                placeholder={menu3PlaceholderMessage}
            />
        </div>
    )
}
