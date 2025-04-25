flowchart TD
    A["Start"] --> B["Contact ServiceNow"]
    B --> C["Fetch Incidents or RITM Tickets from the queue"]
    C --> D["Check for Password Protected File Attachment"]
    D --> E{"Is Attachment Password Protected?"}
    E -- Yes --> F["Extract Information from Ticket"]
    E -- No --> G["Skip Ticket Processing"]
    F --> H["Check Justification Criteria"]
    H --> I{"Is Justification Sufficient?"}
    I -- Yes --> J["Contact Proofpoint Server via API"]
    I -- No --> K["Update ServiceNow Ticket"]
    J --> L["Request Email Release using GUID"]
    K --> L
    L --> M["Process Successful"]
    M --> N["End"]
    N --> O["Notify Team DL Net-Sec-Emailsecurity if Connectivity or Process Fails"]
    G --> P["Skip Ticket Processing and Go to Next Ticket"]

    style A fill:#B3D9FF,stroke:#4682B4,stroke-width:2px
    style B fill:#FFE6B3,stroke:#FFB84D,stroke-width:2px
    style C fill:#E6FFFA,stroke:#00B0B9,stroke-width:2px
    style D fill:#F0E68C,stroke:#F4A300,stroke-width:2px
    style E fill:#FFB6C1,stroke:#FF6347,stroke-width:2px
    style F fill:#DFF2BF,stroke:#4CAF50,stroke-width:2px
    style G fill:#FFE6B3,stroke:#FFB84D,stroke-width:2px
    style H fill:#F7E1A2,stroke:#F39C12,stroke-width:2px
    style I fill:#B3E5FC,stroke:#03A9F4,stroke-width:2px
    style J fill:#D1C4E9,stroke:#7E57C2,stroke-width:2px
    style K fill:#FFCDD2,stroke:#F44336,stroke-width:2px
    style L fill:#C8E6C9,stroke:#388E3C,stroke-width:2px
    style M fill:#D1C4E9,stroke:#7E57C2,stroke-width:2px
    style N fill:#FFCDD2,stroke:#F44336,stroke-width:2px
    style O fill:#F0E68C,stroke:#F4A300,stroke-width:2px
    style P fill:#B3D9FF,stroke:#4682B4,stroke-width:2px


