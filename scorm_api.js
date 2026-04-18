/**
 * SCORM 1.2 API Wrapper
 * Provides a clean interface to communicate with the LMS.
 */
const ScormAPI = (function () {
  let api = null;
  let initialized = false;

  /**
   * Finds the SCORM 1.2 API object by searching up the window hierarchy.
   */
  function findAPI(win) {
    let attempts = 0;
    while (win && !win.API && attempts < 10) {
      if (win.parent && win.parent !== win) {
        win = win.parent;
      } else if (win.opener) {
        win = win.opener;
      } else {
        break;
      }
      attempts++;
    }
    return win ? win.API || null : null;
  }

  function getAPI() {
    if (api) return api;
    api = findAPI(window);
    if (!api && window.opener) {
      api = findAPI(window.opener);
    }
    return api;
  }

  function init() {
    const apiObj = getAPI();
    if (apiObj) {
      const result = apiObj.LMSInitialize("");
      initialized = result === "true" || result === true;
      if (initialized) {
        apiObj.LMSSetValue("cmi.core.lesson_status", "incomplete");
        apiObj.LMSCommit("");
      }
    } else {
      console.warn("SCORM API not found. Running in standalone mode.");
      initialized = false;
    }
    return initialized;
  }

  function setValue(key, value) {
    const apiObj = getAPI();
    if (apiObj && initialized) {
      apiObj.LMSSetValue(key, String(value));
      apiObj.LMSCommit("");
      return true;
    }
    console.log(`SCORM setValue: ${key} = ${value}`);
    return false;
  }

  function getValue(key) {
    const apiObj = getAPI();
    if (apiObj && initialized) {
      return apiObj.LMSGetValue(key);
    }
    return "";
  }

  function setScore(score) {
    setValue("cmi.core.score.raw", score);
    setValue("cmi.core.score.min", 0);
    setValue("cmi.core.score.max", 100);
  }

  function setStatus(status) {
    setValue("cmi.core.lesson_status", status);
  }

  function setLocation(loc) {
    setValue("cmi.core.lesson_location", loc);
  }

  function getLocation() {
    return getValue("cmi.core.lesson_location");
  }

  function setSuspendData(data) {
    setValue("cmi.suspend_data", data);
  }

  function getSuspendData() {
    return getValue("cmi.suspend_data");
  }

  function complete(score, passingScore) {
    setScore(score);
    if (score >= passingScore) {
      setStatus("passed");
    } else {
      setStatus("failed");
    }
  }

  function setExit(status) {

    setValue("cmi.core.exit", status);
  }

  function finish() {

    const apiObj = getAPI();
    if (apiObj && initialized) {
      apiObj.LMSFinish("");
    }
  }

  return {
    init,
    setValue,
    getValue,
    setScore,
    setStatus,
    setLocation,
    getLocation,
    setSuspendData,
    getSuspendData,
    setExit,
    complete,
    finish,
  };


})();
