import { CardData } from '@bit/irishlife.irishlifedesignsystem.card-data';
import { Button } from '@bit/irishlife.irishlifedesignsystem.button';

export const formtUserData = data => {
    const arr = Object.keys(data).map((k) => data[k])
    const keys = Object.keys(data)
    return arr.map((element, index) => {
        const item = {
            id: index,
            label: element.status,
            title: getTitle(index, keys),
            status: getStatus(element.status),
            body: [
                {
                    Component: CardData,
                    id: 1,
                    props: {
                        label: 'Policy Number',
                        data: element.holdings.holding.policyNumber,
                        type: 'copy',
                    },
                },
                {
                    Component: CardData,
                    id: 2,
                    props: {
                        label: 'Renewal Date',
                        data: element.holdings.holding.renewalDate,
                    }
                },
                {
                    Component: Button,
                    id: 3,
                    props: {
                        label: 'View details',
                        icon: "rightArrow",
                        iconPosition: "right",
                        onClick: () => null
                    },
                    position: 'center'
                },
            ]
        };
        return item;
    });
}

export const getTitle = (elemIndex, keys) => {
    if(keys[elemIndex] === 'cb') return 'Investments'
    if(keys[elemIndex] === 'health') return 'Health Insurance'
    if(keys[elemIndex] === 'retail') return 'Life Insurance'
}

export const getStatus = string => {
    if(string === 'Cover is great') return 'great'
    if(string === 'Cover is OK') return 'okay'
    if(string === 'Cover is excellent') return 'great'
    if(string === 'Cover is poor') return 'poor'
}
