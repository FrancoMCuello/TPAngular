import { ThemePalette } from "@angular/material/core";

export type Filter = {
    name: string;
    completed: boolean,
    color: string,
    subtasks: [
      {name: string, completed: boolean, color: ThemePalette},
      {name: string, completed: boolean, color: ThemePalette},
      {name: string, completed: boolean, color: ThemePalette},
    ],
  };