import React, { FC, PropsWithChildren } from "react";
const RootLayout: FC<PropsWithChildren> = ({children}) =>{
    return(
        <html>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;