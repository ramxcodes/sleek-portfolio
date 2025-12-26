export type AnalyticsEvent = {
  name:
    | 'page_view'
    | 'button_click'
    | 'form_submit'
    | 'form_error'
    | 'content_view'
    | 'chat_message_sent'
    | 'external_link_click';
  data: {
    [key: string]: string | boolean | number;
  };
};

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
