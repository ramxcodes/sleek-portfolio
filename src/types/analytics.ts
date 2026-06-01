/**
 * Single source of truth for every analytics event the site can emit.
 *
 * To add a new event, add one entry here. The event-name union, the
 * discriminated `AnalyticsEvent` type, and the typing of `useUmami().trackEvent`
 * all derive from this map automatically, so the rest of the app stays type-safe
 * and the taxonomy scales without touching the hook.
 *
 * Umami's `track(name, data)` only accepts flat primitive values, so every
 * shape below must stay flat (string | number | boolean).
 */
export type AnalyticsEventData = {
  page_view: {
    path: string;
    title: string;
  };
  button_click: {
    buttonId: string;
    section?: string;
    action?: string;
  };
  theme_toggle: {
    from: 'light' | 'dark';
    to: 'light' | 'dark';
    location?: string;
  };
  /**
   * Fired for any interaction with a specific project. `projectId` keeps each
   * project uniquely identifiable in the dashboard, and `action` distinguishes
   * how the project was engaged with. New projects are tracked automatically —
   * no per-project code required.
   */
  project_click: {
    projectId: string;
    projectTitle: string;
    action: 'view_details' | 'visit_website' | 'visit_github' | 'play_video';
    location?: string;
  };
  form_submit: {
    formId: string;
    success: boolean;
  };
  form_error: {
    formId: string;
    errorType: string;
    field?: string;
  };
  content_view: {
    contentId: string;
    contentType: 'blog' | 'project' | 'experience';
    section: string;
  };
  chat_message_sent: {
    message: string;
    sender: 'user' | 'assistant';
  };
  external_link_click: {
    url: string;
    text: string;
    location: string;
  };
};

/** Union of all valid event names, e.g. 'button_click' | 'theme_toggle' | ... */
export type AnalyticsEventName = keyof AnalyticsEventData;

/**
 * Discriminated union pairing each event name with its matching data shape.
 * Derived from `AnalyticsEventData` so the two can never drift apart.
 */
export type AnalyticsEvent = {
  [Name in AnalyticsEventName]: {
    name: Name;
    data: AnalyticsEventData[Name];
  };
}[AnalyticsEventName];
