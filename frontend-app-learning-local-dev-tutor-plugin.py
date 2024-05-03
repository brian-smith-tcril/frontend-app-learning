# copy this file to your tutor plugins directory
# you can find that directory by running:
# tutor plugins printroot
# 
# then enable it:
# tutor plugins enable frontend-app-learning-local-dev-tutor-plugin
#
# then verify it is enabled:
# tutor plugins list

from tutor import hooks
from tutormfe.hooks import MFE_APPS

@MFE_APPS.add()
def _remove_some_my_mfe(mfes):
    print(mfes)
    mfes.pop("authn", None)
    mfes.pop("learning", None)
    return mfes

hooks.Filters.ENV_PATCHES.add_item(
    (
        "openedx-lms-development-settings",

        """
LEARNING_MICROFRONTEND_URL = "http://{{MFE_HOST}}:2000"
CORS_ORIGIN_WHITELIST.append("http://{{ MFE_HOST }}:2000")
CSRF_TRUSTED_ORIGINS.append("{{ MFE_HOST }}:2000")

"""
    )
)