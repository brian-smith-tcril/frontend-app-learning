import PropTypes from 'prop-types';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { useModel } from '@src/generic/model-store';

import SidebarTriggers from '../../courseware/course/sidebar/SidebarTriggers';
import NewSidebarTriggers from '../../courseware/course/new-sidebar/SidebarTriggers';

const NotificationsDiscussionsSidebarTriggerSlot = ({ courseId }) => {
  const {
    isNewDiscussionSidebarViewEnabled,
  } = useModel('courseHomeMeta', courseId);

  return (
    <PluginSlot
      id="notifications_discussions_sidebar_trigger_slot"
      slotOptions={{
        mergeProps: true,
      }}
    >
      {isNewDiscussionSidebarViewEnabled ? <NewSidebarTriggers /> : <SidebarTriggers /> }
    </PluginSlot>
  );
};

NotificationsDiscussionsSidebarTriggerSlot.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default NotificationsDiscussionsSidebarTriggerSlot;
