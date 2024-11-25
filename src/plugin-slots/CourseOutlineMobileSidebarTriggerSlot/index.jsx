import { PluginSlot } from '@openedx/frontend-plugin-framework';

import CourseOutlineTrigger from '../../courseware/course/sidebar/sidebars/course-outline/CourseOutlineTrigger';

const CourseOutlineMobileSidebarTriggerSlot = () => (
  <PluginSlot
    id="course_outline_mobile_sidebar_trigger_slot"
    slotOptions={{
      mergeProps: true,
    }}
  >
    <>
      <CourseOutlineTrigger isMobileView />
    </>
  </PluginSlot>
);

export default CourseOutlineMobileSidebarTriggerSlot;
