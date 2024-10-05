import React, { useMemo } from "react";
import { Container, Content, MessageText, NameUser, AreaName } from "./styles";

export default function MessageFeed({ data, userId }) {

    const userMessage = useMemo(() => {
        return data?.user?._id === userId;
    }, [data, userId]);

    return (
        <Container userMSG={userMessage}>
            {data.system ? (
                <Content>
                    <MessageText>{data.text}</MessageText>
                </Content>
            ) : (
                <Content BG={userMessage}>
                    {!userMessage && (
                        <AreaName>
                            <NameUser numberOfLines={1}>
                                {data?.user?.displayName}
                            </NameUser>
                        </AreaName>
                    )}
                    <MessageText>{data.text}</MessageText>
                </Content>
            )}
        </Container>
    );
}
