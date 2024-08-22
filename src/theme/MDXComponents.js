import React from "react";
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import { IUCard } from "../components/IUCard";
import { KBACard } from "../components/KBACard";
import { NewIn } from "../components/NewIn";
import { ChangedIn } from "../components/ChangedIn";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { ColorBox } from "../components/ColorBox";
import { NewMobile } from "../components/NewMobile";

export default {
    // Re-use the default mapping
    ...MDXComponents,
    Highlight,
    IUCard,
    NewIn,
    ChangedIn,
    KBACard,
    Tabs,
    TabItem,
    ColorBox,
    NewMobile,
  };