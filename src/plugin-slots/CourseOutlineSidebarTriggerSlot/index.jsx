import { PluginSlot } from '@openedx/frontend-plugin-framework';

import CourseOutlineTrigger from '../../courseware/course/sidebar/sidebars/course-outline/CourseOutlineTrigger';

const CourseOutlineSidebarTriggerSlot = () => (
  <PluginSlot
    id="course_outline_sidebar_trigger_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <CourseOutlineTrigger />
  </PluginSlot>
);

export default CourseOutlineSidebarTriggerSlot;
