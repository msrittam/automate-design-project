import './App.css';
import {useState} from "react"
export default function App() {
const [isFirstSelected,setIsFirstSelected] = useState(false);
const [isSecondSelected,setIsSecondSelected] = useState(false);
const [isThirdSelected,setIsThirdSelected] = useState(false);
const [isFourthSelected,setIsFourthSelected] = useState(false);
const [isFifthSelected,setIsFifthSelected] = useState(false);
  return (
<div className="AppContainer">
<div className="WebsiteSidebar">
    <div className="WebsiteSidebarContainerUpper">
        <div className="SidebarSearchLogo">
            <img src="CompanyMainLogo.png"
                 alt="CompanyMainLogo"
                 title="CompanyMainLogo"/>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarDashboardLogo.png"
                     alt="SidebarDashboardLogo"
                     title="SidebarDashboardLogo"/>
            </div>
            <p className="AutomateChatPara">Dashboard</p>
        </div>
        <div className="SidebarServiceLogoWrapper">
            <div className="SidebarSearchLogo">
                <img src="SidebarPlaygroundLogo.png"
                     alt="SidebarPlaygroundLogo"
                     title="SidebarPlaygroundLogo"/>
            </div>
            <p className="AutomateChatPara">Playground</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarIngestLogo.png"
                     alt="SidebarIngestLogo"
                     title="SidebarIngestLogo"/>
            </div>
            <p className="AutomateChatPara">Ingest</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarAutomationsLogo.png"
                     alt="SidebarAutomationsLogo"
                     title="SidebarAutomationsLogo"/>
            </div>
            <p className="AutomateChatPara">Automations</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarActiveLogo.png"
                     alt="SidebarActiveLogo"
                     title="SidebarActiveLogo"/>
            </div>
            <p className="AutomateChatPara">Active Automations</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarIntegrationsLogo.png"
                     alt="SidebarIntegrationsLogo"
                     title="SidebarIntegrationsLogo"/>
            </div>
            <p className="AutomateChatPara">Integrations</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarMessagesLogo.png"
                     alt="SidebarMessagesLogo"
                     title="SidebarMessagesLogo"/>
            </div>
            <p className="AutomateChatPara">Messages</p>
        </div>
    </div>
    <div className="WebsiteSidebarContainerDown"></div>
</div>
<div className="AutomateChatContainer">
    <div className="AutomateChatContainerUpper">
        <p className="AutomateChatPara">Automate Chat</p>
        <div className="SidebarSearchLogoWrapper">
            <div className="SidebarSearchLogo">
                <img src="SidebarSearchLogo.png"
                     alt="SidebarSearchLogo"
                     title="SidebarSearchLogo"/>
            </div>
            <p className="AutomateChatPara2">Search...</p>
        </div>
        <p className="AutomateChatPara3">Recent</p>
        <div className="SidebarServiceLogoWrapper">
            <div className="SidebarSearchLogo">
                <img src="SidebarServiceLogo.png"
                     alt="SidebarServiceLogo"
                     title="SidebarServiceLogo"/>
            </div>
            <p className="AutomateChatPara2">Customer Service</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarInventoryLogo.png"
                     alt="SidebarInventoryLogo"
                     title="SidebarInventoryLogo"/>
            </div>
            <p className="AutomateChatPara2">Inventory Management</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarMarketLogo.png"
                     alt="SidebarMarketLogo"
                     title="SidebarMarketLogo"/>
            </div>
            <p className="AutomateChatPara2">Market Dynamics</p>
        </div>
        <p className="AutomateChatPara3">Last 30 Days</p>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarMarketLogo.png"
                     alt="SidebarMarketLogo"
                     title="SidebarMarketLogo"/>
            </div>
            <p className="AutomateChatPara2">Customer Service</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarInventoryLogo.png"
                     alt="SidebarInventoryLogo"
                     title="SidebarInventoryLogo"/>
            </div>
            <p className="AutomateChatPara2">Inventory Management</p>
        </div>
        <div className="SidebarServiceLogoWrapper1">
            <div className="SidebarSearchLogo">
                <img src="SidebarMarketLogo.png"
                     alt="SidebarMarketLogo"
                     title="SidebarMarketLogo"/>
            </div>
            <p className="AutomateChatPara2">Market Dynamics</p>
        </div>
    </div>
    <div className="SidebarNewChatLogoWrapper">
        <div className="SidebarSearchLogo">
            <img src="SidebarNewChatLogo.png"
                 alt="SidebarNewChatLogo"
                 title="SidebarNewChatLogo"/>
        </div>
        <p className="AutomateChatPara">New Chat</p>
    </div>
</div>
<div className="AutomateDesignContainer">
    <div className="AutomateDesignHeader">
        <div className="DesignHeaderHeading">
            <div className="DesignHeaderLogoImage">
                <img src="DesignHeaderLogo.png"
                     alt="DesignHeaderLogo"
                     title="DesignHeaderLogo"/>
            </div>
            <p className="DesignHeaderName">Automate Design</p>
        </div>
        <div className="HeaderShareDownload">
            <div className="DesignHeaderShare">
                <div className="AutomateDesignShare">
                    <img src="AutomateDesignShare.png"
                         alt="AutomateDesignShare"
                         title="AutomateDesignShare"/>
                </div>
                <p className="DesignHeaderShareName">Share</p>
            </div>
            <div className="DesignHeaderDownload">
                <div className="AutomateDesignDownload">
                    <img src="AutomateDesignDownload.png"
                         alt="AutomateDesignDownload"
                         title="AutomateDesignDownload"/>
                </div>
                <p className="DesignHeaderDownloadName">Download</p>
            </div>
        </div>
    </div>
    <div className="CustomerRegistration">
        <div className="CustomerRegistrationLogo">
            <img src="CustomerRegistrationLogo.png"
                 alt="CustomerRegistrationLogo"
                 title="CustomerRegistrationLogo"/>
        </div>
        <div>
            <p className="CustomerRegistrationName">Customer Registration</p>
            <p className="AutomationSteps">Automation Steps</p>
        </div>
    </div>
    <div className="CustomerInformation">
        <div className="CustomerInformationRouter">
            <p className="CustomerInformationNumber">1</p>
            <div className="CustomerInformationBar"></div>
        </div>
        <div className="CustomerInfoDetailsContainer">
            {isFirstSelected?<div className="CustomerInformationDetails">
                <div className="CustomerInformationDetails1">
                    <div>
                        <p className="CustomerInformationCollection">Customer Information Collection</p>
                        <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                    </div>
                    <div className="CustomerInformationLogos">
                        <div className="CustomerInformationLogo1">
                            <img src="CustomerInformationLogo1.png"
                                 alt="CustomerInformationLogo1"
                                 title="CustomerInformationLogo1"/>
                        </div>
                        <div className="CustomerInformationLogo1">
                            <img src="CustomerInformationLogo2.png"
                                 alt="CustomerInformationLogo2"
                                 title="CustomerInformationLogo2"/>
                        </div>
                        <div className="CustomerInformationLogo1"
                        onClick={function(){
                        setIsFirstSelected(false)
                        setIsSecondSelected(false)
                        setIsThirdSelected(false)
                        setIsFourthSelected(false)
                        setIsFifthSelected(false)
                        }}>
                            <img src="CustomerInformationLogo3.png"
                                 alt="CustomerInformationLogo3"
                                 title="CustomerInformationLogo3"/>
                        </div>
                        <p className="CustomerInformationAssist">Assist</p>
                    </div>
                </div>
                <div className="CustomerInformationDetails2">
                    <div className="CustomerInformationImageWrap">
                        <div className="CustomerInformationImage1">
                            <img src="CustomerInformationImage1.png"
                                 alt="CustomerInformationImage1"
                                 title="CustomerInformationImage1"/>
                        </div>
                        <p className="CustomerInformationStart">Start</p>
                        <p className="CustomerInformationTrigger1">Trigger</p>
                    </div>
                    <div className="CustomerInformationImageWrap">
                        <div className="CustomerInformationImage1">
                            <img src="CustomerInformationImage2.png"
                                 alt="CustomerInformationImage2"
                                 title="CustomerInformationImage2"/>
                        </div>
                        <p className="CustomerInformationStart">Activity</p>
                        <p className="CustomerInformationTrigger2">Input</p>
                    </div>
                    <div className="CustomerInformationImageWrap">
                        <div className="CustomerInformationImage1">
                            <img src="CustomerInformationImage3.png"
                                 alt="CustomerInformationImage3"
                                 title="CustomerInformationImage3"/>
                        </div>
                        <p className="CustomerInformationStart">Result</p>
                        <p className="CustomerInformationTrigger3">Output</p>
                    </div>
                </div>
            </div>:
            <div className="CustomerInformationDetails">
                            <div className="CustomerInformationDetails1">
                                <div>
                                    <p className="CustomerInformationCollection">Customer Information Collection</p>
                                    <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                </div>
                                <div className="CustomerInformationLogos">
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo1.png"
                                             alt="CustomerInformationLogo1"
                                             title="CustomerInformationLogo1"/>
                                    </div>
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo2.png"
                                             alt="CustomerInformationLogo2"
                                             title="CustomerInformationLogo2"/>
                                    </div>
                                    <div className="CustomerInformationLogo1"
                                    onClick={function(){
                                                            setIsFirstSelected(true)
                                                            setIsSecondSelected(false)
                                                            setIsThirdSelected(false)
                                                            setIsFourthSelected(false)
                                                            setIsFifthSelected(false)
                                                            }}>
                                        <img src="CustomerInformationLogo4.png"
                                             alt="CustomerInformationLogo4"
                                             title="CustomerInformationLogo4"/>
                                    </div>
                                    <p className="CustomerInformationAssist">Assist</p>
                                </div>
                            </div>
                        </div>}
        </div>
    </div>
    <div className="CustomerInformation">
        <div className="CustomerInformationRouter2">
            <div className="CustomerInformationBar2"></div>
            <p className="CustomerInformationNumber2">2</p>
            <div className="CustomerInformationBar3"></div>
        </div>
        <div className="CustomerInfoDetailsContainer">
            {isSecondSelected?<div className="CustomerInformationDetails">
                            <div className="CustomerInformationDetails1">
                                <div>
                                    <p className="CustomerInformationCollection">Customer Information Collection</p>
                                    <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                </div>
                                <div className="CustomerInformationLogos">
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo1.png"
                                             alt="CustomerInformationLogo1"
                                             title="CustomerInformationLogo1"/>
                                    </div>
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo2.png"
                                             alt="CustomerInformationLogo2"
                                             title="CustomerInformationLogo2"/>
                                    </div>
                                    <div className="CustomerInformationLogo1"
                                    onClick={function(){
                                                            setIsFirstSelected(false)
                                                            setIsSecondSelected(false)
                                                            setIsThirdSelected(false)
                                                            setIsFourthSelected(false)
                                                            setIsFifthSelected(false)
                                                            }}>
                                        <img src="CustomerInformationLogo3.png"
                                             alt="CustomerInformationLogo3"
                                             title="CustomerInformationLogo3"/>
                                    </div>
                                    <p className="CustomerInformationAssist">Assist</p>
                                </div>
                            </div>
                            <div className="CustomerInformationDetails2">
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage1.png"
                                             alt="CustomerInformationImage1"
                                             title="CustomerInformationImage1"/>
                                    </div>
                                    <p className="CustomerInformationStart">Start</p>
                                    <p className="CustomerInformationTrigger1">Trigger</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage2.png"
                                             alt="CustomerInformationImage2"
                                             title="CustomerInformationImage2"/>
                                    </div>
                                    <p className="CustomerInformationStart">Activity</p>
                                    <p className="CustomerInformationTrigger2">Input</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage3.png"
                                             alt="CustomerInformationImage3"
                                             title="CustomerInformationImage3"/>
                                    </div>
                                    <p className="CustomerInformationStart">Result</p>
                                    <p className="CustomerInformationTrigger3">Output</p>
                                </div>
                            </div>
                        </div>:
                        <div className="CustomerInformationDetails">
                                        <div className="CustomerInformationDetails1">
                                            <div>
                                                <p className="CustomerInformationCollection">Customer Information Collection</p>
                                                <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                            </div>
                                            <div className="CustomerInformationLogos">
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo1.png"
                                                         alt="CustomerInformationLogo1"
                                                         title="CustomerInformationLogo1"/>
                                                </div>
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo2.png"
                                                         alt="CustomerInformationLogo2"
                                                         title="CustomerInformationLogo2"/>
                                                </div>
                                                <div className="CustomerInformationLogo1"
                                                onClick={function(){
                                                                        setIsFirstSelected(false)
                                                                        setIsSecondSelected(true)
                                                                        setIsThirdSelected(false)
                                                                        setIsFourthSelected(false)
                                                                        setIsFifthSelected(false)
                                                                        }}>
                                                    <img src="CustomerInformationLogo4.png"
                                                         alt="CustomerInformationLogo4"
                                                         title="CustomerInformationLogo4"/>
                                                </div>
                                                <p className="CustomerInformationAssist">Assist</p>
                                            </div>
                                        </div>
                                    </div>}
        </div>
    </div>
    <div className="CustomerInformation">
        <div className="CustomerInformationRouter2">
            <div className="CustomerInformationBar4"></div>
            <p className="CustomerInformationNumber3">3</p>
            <div className="CustomerInformationBar5"></div>
        </div>
        <div className="CustomerInfoDetailsContainer">
            {isThirdSelected?<div className="CustomerInformationDetails">
                            <div className="CustomerInformationDetails1">
                                <div>
                                    <p className="CustomerInformationCollection">Customer Information Collection</p>
                                    <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                </div>
                                <div className="CustomerInformationLogos">
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo1.png"
                                             alt="CustomerInformationLogo1"
                                             title="CustomerInformationLogo1"/>
                                    </div>
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo2.png"
                                             alt="CustomerInformationLogo2"
                                             title="CustomerInformationLogo2"/>
                                    </div>
                                    <div className="CustomerInformationLogo1"
                                    onClick={function(){
                                                            setIsFirstSelected(false)
                                                            setIsSecondSelected(false)
                                                            setIsThirdSelected(false)
                                                            setIsFourthSelected(false)
                                                            setIsFifthSelected(false)
                                                            }}>
                                        <img src="CustomerInformationLogo3.png"
                                             alt="CustomerInformationLogo3"
                                             title="CustomerInformationLogo3"/>
                                    </div>
                                    <p className="CustomerInformationAssist">Assist</p>
                                </div>
                            </div>
                            <div className="CustomerInformationDetails2">
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage1.png"
                                             alt="CustomerInformationImage1"
                                             title="CustomerInformationImage1"/>
                                    </div>
                                    <p className="CustomerInformationStart">Start</p>
                                    <p className="CustomerInformationTrigger1">Trigger</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage2.png"
                                             alt="CustomerInformationImage2"
                                             title="CustomerInformationImage2"/>
                                    </div>
                                    <p className="CustomerInformationStart">Activity</p>
                                    <p className="CustomerInformationTrigger2">Input</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage3.png"
                                             alt="CustomerInformationImage3"
                                             title="CustomerInformationImage3"/>
                                    </div>
                                    <p className="CustomerInformationStart">Result</p>
                                    <p className="CustomerInformationTrigger3">Output</p>
                                </div>
                            </div>
                        </div>:
                        <div className="CustomerInformationDetails">
                                        <div className="CustomerInformationDetails1">
                                            <div>
                                                <p className="CustomerInformationCollection">Customer Information Collection</p>
                                                <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                            </div>
                                            <div className="CustomerInformationLogos">
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo1.png"
                                                         alt="CustomerInformationLogo1"
                                                         title="CustomerInformationLogo1"/>
                                                </div>
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo2.png"
                                                         alt="CustomerInformationLogo2"
                                                         title="CustomerInformationLogo2"/>
                                                </div>
                                                <div className="CustomerInformationLogo1"
                                                onClick={function(){
                                                                        setIsFirstSelected(false)
                                                                        setIsSecondSelected(false)
                                                                        setIsThirdSelected(true)
                                                                        setIsFourthSelected(false)
                                                                        setIsFifthSelected(false)
                                                                        }}>
                                                    <img src="CustomerInformationLogo4.png"
                                                         alt="CustomerInformationLogo4"
                                                         title="CustomerInformationLogo4"/>
                                                </div>
                                                <p className="CustomerInformationAssist">Assist</p>
                                            </div>
                                        </div>
                                    </div>}
        </div>
    </div>
    <div className="CustomerInformation">
        <div className="CustomerInformationRouter2">
            <div className="CustomerInformationBar6"></div>
            <p className="CustomerInformationNumber4">4</p>
            <div className="CustomerInformationBar7"></div>
        </div>
        <div className="CustomerInfoDetailsContainer">
            {isFourthSelected?<div className="CustomerInformationDetails">
                            <div className="CustomerInformationDetails1">
                                <div>
                                    <p className="CustomerInformationCollection">Customer Information Collection</p>
                                    <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                </div>
                                <div className="CustomerInformationLogos">
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo1.png"
                                             alt="CustomerInformationLogo1"
                                             title="CustomerInformationLogo1"/>
                                    </div>
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo2.png"
                                             alt="CustomerInformationLogo2"
                                             title="CustomerInformationLogo2"/>
                                    </div>
                                    <div className="CustomerInformationLogo1"
                                    onClick={function(){
                                                            setIsFirstSelected(false)
                                                            setIsSecondSelected(false)
                                                            setIsThirdSelected(false)
                                                            setIsFourthSelected(false)
                                                            setIsFifthSelected(false)
                                                            }}>
                                        <img src="CustomerInformationLogo3.png"
                                             alt="CustomerInformationLogo3"
                                             title="CustomerInformationLogo3"/>
                                    </div>
                                    <p className="CustomerInformationAssist">Assist</p>
                                </div>
                            </div>
                            <div className="CustomerInformationDetails2">
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage1.png"
                                             alt="CustomerInformationImage1"
                                             title="CustomerInformationImage1"/>
                                    </div>
                                    <p className="CustomerInformationStart">Start</p>
                                    <p className="CustomerInformationTrigger1">Trigger</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage2.png"
                                             alt="CustomerInformationImage2"
                                             title="CustomerInformationImage2"/>
                                    </div>
                                    <p className="CustomerInformationStart">Activity</p>
                                    <p className="CustomerInformationTrigger2">Input</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage3.png"
                                             alt="CustomerInformationImage3"
                                             title="CustomerInformationImage3"/>
                                    </div>
                                    <p className="CustomerInformationStart">Result</p>
                                    <p className="CustomerInformationTrigger3">Output</p>
                                </div>
                            </div>
                        </div>:
                        <div className="CustomerInformationDetails">
                                        <div className="CustomerInformationDetails1">
                                            <div>
                                                <p className="CustomerInformationCollection">Customer Information Collection</p>
                                                <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                            </div>
                                            <div className="CustomerInformationLogos">
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo1.png"
                                                         alt="CustomerInformationLogo1"
                                                         title="CustomerInformationLogo1"/>
                                                </div>
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo2.png"
                                                         alt="CustomerInformationLogo2"
                                                         title="CustomerInformationLogo2"/>
                                                </div>
                                                <div className="CustomerInformationLogo1"
                                                onClick={function(){
                                                                        setIsFirstSelected(false)
                                                                        setIsSecondSelected(false)
                                                                        setIsThirdSelected(false)
                                                                        setIsFourthSelected(true)
                                                                        setIsFifthSelected(false)
                                                                        }}>
                                                    <img src="CustomerInformationLogo4.png"
                                                         alt="CustomerInformationLogo4"
                                                         title="CustomerInformationLogo4"/>
                                                </div>
                                                <p className="CustomerInformationAssist">Assist</p>
                                            </div>
                                        </div>
                                    </div>}
        </div>
    </div>
    <div className="CustomerInformation">
        <div className="CustomerInformationRouter2">
            <div className="CustomerInformationBar8"></div>
            <p className="CustomerInformationNumber5">5</p>
        </div>
        <div className="CustomerInfoDetailsContainer">
            {isFifthSelected?<div className="CustomerInformationDetails">
                            <div className="CustomerInformationDetails1">
                                <div>
                                    <p className="CustomerInformationCollection">Customer Information Collection</p>
                                    <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                </div>
                                <div className="CustomerInformationLogos">
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo1.png"
                                             alt="CustomerInformationLogo1"
                                             title="CustomerInformationLogo1"/>
                                    </div>
                                    <div className="CustomerInformationLogo1">
                                        <img src="CustomerInformationLogo2.png"
                                             alt="CustomerInformationLogo2"
                                             title="CustomerInformationLogo2"/>
                                    </div>
                                    <div className="CustomerInformationLogo1"
                                    onClick={function(){
                                                            setIsFirstSelected(false)
                                                            setIsSecondSelected(false)
                                                            setIsThirdSelected(false)
                                                            setIsFourthSelected(false)
                                                            setIsFifthSelected(false)
                                                            }}>
                                        <img src="CustomerInformationLogo3.png"
                                             alt="CustomerInformationLogo3"
                                             title="CustomerInformationLogo3"/>
                                    </div>
                                    <p className="CustomerInformationAssist">Assist</p>
                                </div>
                            </div>
                            <div className="CustomerInformationDetails2">
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage1.png"
                                             alt="CustomerInformationImage1"
                                             title="CustomerInformationImage1"/>
                                    </div>
                                    <p className="CustomerInformationStart">Start</p>
                                    <p className="CustomerInformationTrigger1">Trigger</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage2.png"
                                             alt="CustomerInformationImage2"
                                             title="CustomerInformationImage2"/>
                                    </div>
                                    <p className="CustomerInformationStart">Activity</p>
                                    <p className="CustomerInformationTrigger2">Input</p>
                                </div>
                                <div className="CustomerInformationImageWrap">
                                    <div className="CustomerInformationImage1">
                                        <img src="CustomerInformationImage3.png"
                                             alt="CustomerInformationImage3"
                                             title="CustomerInformationImage3"/>
                                    </div>
                                    <p className="CustomerInformationStart">Result</p>
                                    <p className="CustomerInformationTrigger3">Output</p>
                                </div>
                            </div>
                        </div>:
                        <div className="CustomerInformationDetails">
                                        <div className="CustomerInformationDetails1">
                                            <div>
                                                <p className="CustomerInformationCollection">Customer Information Collection</p>
                                                <p className="CustomerInfoParagraph">User enters personal details (eg. name, email, phone number) and submits it</p>
                                            </div>
                                            <div className="CustomerInformationLogos">
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo1.png"
                                                         alt="CustomerInformationLogo1"
                                                         title="CustomerInformationLogo1"/>
                                                </div>
                                                <div className="CustomerInformationLogo1">
                                                    <img src="CustomerInformationLogo2.png"
                                                         alt="CustomerInformationLogo2"
                                                         title="CustomerInformationLogo2"/>
                                                </div>
                                                <div className="CustomerInformationLogo1"
                                                onClick={function(){
                                                                        setIsFirstSelected(false)
                                                                        setIsSecondSelected(false)
                                                                        setIsThirdSelected(false)
                                                                        setIsFourthSelected(false)
                                                                        setIsFifthSelected(true)
                                                                        }}>
                                                    <img src="CustomerInformationLogo4.png"
                                                         alt="CustomerInformationLogo4"
                                                         title="CustomerInformationLogo4"/>
                                                </div>
                                                <p className="CustomerInformationAssist">Assist</p>
                                            </div>
                                        </div>
                                    </div>}
        </div>
    </div>
</div>
</div>
  );
}
