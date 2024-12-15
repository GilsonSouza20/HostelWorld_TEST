const PERMISSIONS = {
    VIEW_HOME: 'view_home', //All users should have view_home permission
    SPECIAL_TOOLS: 'special_tools', //Only TOOLSHOP members should have special_tools permission
};

const environments = {
    qa: {
        normal_user: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
            ],
        },
        super_user: {
            email: 'customer2@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
                PERMISSIONS.SPECIAL_TOOLS,
            ],
        },
    },
    stage: {
        normal_user: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
            ],
        },
        super_user: {
            email: 'customer2@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
                PERMISSIONS.SPECIAL_TOOLS,
            ],
        },
    },
    prod: {
        normal_user: {
            email: 'customer@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
            ],
        },
        super_user: {
            email: 'customer2@practicesoftwaretesting.com',
            password: 'welcome01',
            permissions: [
                PERMISSIONS.VIEW_HOME,
                PERMISSIONS.SPECIAL_TOOLS,
            ],
        },
    },
}
module.exports = { environments, PERMISSIONS };