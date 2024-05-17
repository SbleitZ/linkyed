export interface Info {
  basics: Basics;
  links:  Link[];
  colors: Colors;
  footer: Footer;
}

export interface Basics {
  name:        string;
  description: string;
  image:       string;
}

export interface Colors {
  background:   string;
  "text-color": string;
  shadow:       string;
  border:       string;
}

export interface Footer {
}

export interface Link {
  icon:    string;
  label:   string;
  effects: Effects;
}

export interface Effects {
  "text-align":  string;
  duration:      string;
  animation:     string;
  "font-weigth": string;
  "font-size":   string;
}