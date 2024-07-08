export const menus = [
    {
      label: "Home",
      to: "/",
      id:1,
    },
    {
      label: "Profile",
      to: "/profile",
      id:2,
      children: [
        {
          label: "Details",
          to: "details",
          id:3,
          children: [
            {
              label: "Location",
              to: "location",
              id:4,
              children: [
                {
                  label: "City",
                  to: "city",
                  id:5,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      to: "/settings",
      id:6,
      children: [
        {
          label: "Account",
          to: "account",
        },
        {
          label: "Security",
          to: "security",
          id:7,
          children: [
            {
              label: "Login",
              to: "login",
              id:8,
            },
            {
              label: "Register",
              to: "register",
              id:9,
              children : [
                  {
                      label : 'Random data',
                      to : '',
                      id:10,
                  }
              ]
            },
          ],
        },
      ],
    },
  ];
  
  export default menus;