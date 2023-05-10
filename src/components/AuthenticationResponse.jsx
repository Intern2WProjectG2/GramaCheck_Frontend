import { BasicUserInfo } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import ReactJson from "react-json-view";

/**
 * Decoded ID Token Response component Prop types interface.
 */
const AuthenticationResponsePropsInterface = {
    /**
     * Derived Authenticated Response.
     */
    derivedResponse: null
}

const DerivedAuthenticationResponseInterface = {
    /**
     * Response from the `getBasicUserInfo()` function from the SDK context.
     */
    authenticateResponse: BasicUserInfo,
    /**
     * ID token split by `.`.
     */
    idToken: null,
    /**
     * Decoded Header of the ID Token.
     */
    decodedIdTokenHeader: null,
    /**
     * Decoded Payload of the ID Token.
     */
    decodedIDTokenPayload: null,
}

/**
 * Displays the derived Authentication Response from the SDK.
 *
 * @param {AuthenticationResponsePropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */

export const AuthenticationResponse = (props) => {

    const {
        derivedResponse
    } = props;

    return (
        <>
            <h2>Authentication Response</h2>
            <h4 className="sub-title">
                Derived by the&nbsp;
                <code className="inline-code-block">
                    <a href="https://www.npmjs.com/package/@asgardeo/auth-react/v/latest"
                       target="_blank">
                        @asgardeo/auth-react
                    </a>
                </code>&nbsp;SDK
            </h4>
            <div className="json">
                <ReactJson
                    src={ derivedResponse?.authenticateResponse }
                    name={ null }
                    enableClipboard={ false }
                    displayObjectSize={ false }
                    displayDataTypes={ false }
                    iconStyle="square"
                    theme="monokai"
                />
            </div>
            <h2 className="mb-0 mt-4">ID token</h2>
            <div className="row">
                { derivedResponse?.idToken && (
                    <div className="column">
                        <h5>
                            <b>Encoded</b>
                        </h5>
                        <div className="code">
                            <code>
                                <span className="id-token-0">{ derivedResponse?.idToken[0] }</span>.
                                <span className="id-token-1">{ derivedResponse?.idToken[1] }</span>.
                                <span className="id-token-2">{ derivedResponse?.idToken[2] }</span>
                            </code>
                        </div>
                    </div>
                ) }
                <div className="column">
                    <div className="json">
                        <h5>
                            <b>Decoded:</b> Header
                        </h5>
                        <ReactJson
                            src={ derivedResponse?.decodedIdTokenHeader }
                            name={ null }
                            enableClipboard={ false }
                            displayObjectSize={ false }
                            displayDataTypes={ false }
                            iconStyle="square"
                            theme="monokai"
                        />
                    </div>

                    <div className="json">
                        <h5>
                            <b>Decoded:</b> Payload
                        </h5>
                        <ReactJson
                            src={ derivedResponse?.decodedIDTokenPayload }
                            name={ null }
                            enableClipboard={ false }
                            displayObjectSize={ false }
                            displayDataTypes={ false }
                            iconStyle="square"
                            theme="monokai"
                        />
                    </div>
                    <div className="json">
                        <h5>Signature</h5>
                        <div className="code">
                            <code>
                                HMACSHA256(
                                <br/>
                                &nbsp;&nbsp;<span className="id-token-0">base64UrlEncode(
                                                <span className="id-token-1">header</span>)</span> + "." + <br/>
                                &nbsp;&nbsp;<span className="id-token-0">base64UrlEncode(
                                                <span className="id-token-1">payload</span>)</span>,&nbsp;
                                <span className="id-token-1">your-256-bit-secret</span> <br/>
                                );
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
