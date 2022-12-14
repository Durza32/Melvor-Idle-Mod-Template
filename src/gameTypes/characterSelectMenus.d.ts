declare class CharacterDisplayElement extends HTMLElement {
    private _content;
    private selectCharacterButton;
    private gamemodeBackground;
    private gamemodeIcon;
    private saveType;
    private characterName;
    private totalSkillLevel;
    private gpAmount;
    private offlineActionImage;
    private offlineActionName;
    private offlineActionTime;
    private saveTimestamp;
    private timestampComparison;
    constructor();
    connectedCallback(): void;
    toggleTestWarning(isTest: boolean): void;
    setLocalSave(slotID: number, localInfo: SaveGameHeader, cloudInfo?: SaveGameHeader, disableCallbacks?: boolean): void;
    setCloudSave(slotID: number, cloudInfo: SaveGameHeader, localInfo?: SaveGameHeader, disableCallbacks?: boolean): void;
    setDisabled(): void;
    private disableCallbacks;
    private setCharacter;
    updateTimestampComparison(viewedInfo: SaveGameHeader, comparedInfo?: SaveGameHeader): void;
}
declare class SaveSlotDisplayElement extends HTMLElement {
    private _content;
    private slotTitle;
    private settingsButton;
    private importSaveOption;
    private settingsDivider;
    private createSaveLinkOption;
    private downloadSaveOption;
    private exportSaveOption;
    private deleteSettingsDivider;
    private deleteLocalOption;
    private deleteCloudOption;
    private emptySlotContainer;
    private emptySlotButton;
    private emptySlotText;
    private existingCloudWarning;
    private saveLoadingSpinner;
    characterDisplay: CharacterDisplayElement;
    constructor();
    connectedCallback(): void;
    private setSlotID;
    private showCloudSettings;
    private showEmptySaveSettings;
    private showLocalSettings;
    private setEmptyOutline;
    setEmptyLocal(slotID: number, hasCloud: boolean): void;
    setEmptyCloud(slotID: number): void;
    setError(slotID: number, message: string, isCloud: boolean): void;
    setCloudSave(slotID: number, cloudInfo: SaveGameHeader, localInfo?: SaveGameHeader): void;
    setLocalSave(slotID: number, localInfo: SaveGameHeader, cloudInfo?: SaveGameHeader): void;
    setSaveLoading(): void;
    setDisabled(): void;
}
declare class GamemodeSelectionElement extends HTMLElement {
    private _content;
    private selectButton;
    private backgroundDiv;
    private eventNotice;
    private timeRemaining;
    private name;
    private safety;
    private description;
    private rules;
    constructor();
    connectedCallback(): void;
    setGamemode(gamemode: Gamemode): void;
}
