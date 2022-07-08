const User = require("../../models/user");
const Jwt = require("jsonwebtoken");
const transporter = require("../../config/smtpConfig");
const Token = require("../../models/tokenSchema");
const crypto = require("crypto");
const { check, validationResult } = require("express-validator");

const sendConfirmationEmail = (user, token) => {
    const link = `http://localhost:${process.env.PORT}/api/auth/verify/${token}`;
    const mailOptions = {
        to: user.email,
        subject: "TECHNOCRATS ROBOTICS: Verification for Techno Quiz Platform!",
        html:
            `<div style="background-color:#fff;margin:0;padding:0"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fff" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934row-content m_-4676128968139404934stack" role="presentation" style="color:#000;width:500px" width="500"><tbody><tr><td class="m_-4676128968139404934column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934image_block" role="presentation" width="100%"><tbody><tr><td style="width:100%;padding-right:0;padding-left:0"><div align="center" style="line-height:10px"><img class="m_-4676128968139404934big CToWUd" src="https://ci3.googleusercontent.com/proxy/4scgBpXqzMj2vhI-hzIiITaLFgZx-ACVArdWVyneikTH74xMNOxMXlmOyxDaABWkEowWnTS7hcEOOOfPaEomYkPn7GgQdTMaLrXsCJ-prBzWLpMK9biVwdevpVsYhXk98G8PX9js9Wmxc8aI7MT6dNbWjhaQ2XCFD8_Pm_hl=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-2q5jmb7ydia/editor_images/download_1.png" style="display:block;height:auto;border:0;width:450px;max-width:100%" width="450"></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934row-content m_-4676128968139404934stack" role="presentation" style="color:#000;width:500px" width="500"><tbody><tr><td class="m_-4676128968139404934column" style="font-weight:400;text-align:left;vertical-align:top;padding-top:5px;padding-bottom:5px;border-top:0;border-right:0;border-bottom:0;border-left:0" width="100%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="text-align:center;width:100%"><h1 style="margin:0;color:#555;direction:ltr;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:23px;font-weight:700;letter-spacing:normal;line-height:120%;text-align:center;margin-top:0;margin-bottom:0"><span>TECHNOCRATS ROBOTICS</span></h1></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table><table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td><table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934row-content m_-4676128968139404934stack" role="presentation" style="color:#000;width:500px" width="500"><tbody><tr><td class="m_-4676128968139404934column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="33.333333333333336%"><table border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934image_block" role="presentation" width="100%"><tbody><tr><td style="padding-bottom:5px;padding-left:5px;padding-right:5px;padding-top:10px;width:100%"><div align="center" style="line-height:10px"><img src="https://ci4.googleusercontent.com/proxy/8M2CCsE67d8UDpQklZEeaDqCyLdEhlU4NjPjoEc6tN2Q9MBCUCoIv8DLmH1wBihK_Io4Z6KRY07en8Cuc_0I1uG9TgjDsQ7wBAJkpYkOazwxafH_2efPkL2GyO8Jb3HxQ7ZPxuibpOcmH-SJZtTrxCr1NDhGiMtxnnyTc2AdVhonGg=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-2q5jmb7ydia/editor_images/Feb-Business_9.jpg" style="display:block;height:auto;border:0;width:157px;max-width:100%" width="157" class="CToWUd a6T" tabindex="0"><div class="a6S" dir="ltr" style="opacity: 0.01; left: 422px; top: 294.6px;"><div id=":4w" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Download attachment " data-tooltip-class="a1V" data-tooltip="Download"><div class="akn"><div class="aSK J-J5-Ji aYr"></div></div></div></div></div> </td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" class="m_-4676128968139404934image_block" role="presentation" width="100%"><tbody><tr><td style="padding-bottom:25px;padding-left:20px;padding-right:20px;padding-top:80px;width:100%"><div align="center" style="line-height:10px"><img src="https://ci4.googleusercontent.com/proxy/95hecT-TBF5x5lf_7SfZTn2_FLnrCCys0Pn5n-t1Xv-t9YFfwhZMakPzaO_QKVxpshbXboa-uCNSq7ZzehS30sB0asiNCTQb9i-Pp1tR_iOL-7XR2QvqsRVPKWDxRMPKNL9muI4EtP51NU_4LfhZU2wDbWHSLDWZ5J6V=s0-d-e1-ft#https://d15k2d11r6t6rl.cloudfront.net/public/users/BeeFree/beefree-2q5jmb7ydia/editor_images/5197176.jpg" style="display:block;height:auto;border:0;width:127px;max-width:100%" width="127" class="CToWUd"></div></td></tr></tbody></table></td><td class="m_-4676128968139404934column" style="font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0" width="66.66666666666667%"><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%"><tbody><tr><td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px"><div style="color:#000;direction:ltr;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:14px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left"><p style="margin:0;margin-bottom:16px">Hey There,</p><p style="margin:0;margin-bottom:16px"> Thanks for showing interest in our portal "<strong><span style="color:#0072be">Techno</span><span style="color:#41ba00">Quiz</span></strong>". This mail is sent because you registered an account on our portal. </p><p style="margin:0;margin-bottom:16px"> </p><p style="margin:0;margin-bottom:16px">Kindly complete the verification by clicking the link below in order to finalize your account creation. <br> (<em>In case, this request wasn't raised by you, kindly ignore this mail)</em></p><p style="margin:0;margin-bottom:16px"> </p><p style="margin:0"><strong>VERIFICATION<br><br></strong>Verify your account using: </p></div></td></tr></tbody></table><table border="0" cellpadding="10" cellspacing="0" role="presentation" width="100%"><tbody><tr><td> <a href="` +
            link +
            `" style="text-decoration:none;display:block;color:#ffffff;background-color:#0087d4;border-radius:4px;width:100%;width:calc(100% - 2px);border-top:1px solid #0087d4;font-weight:400;border-right:1px solid #0087d4;border-bottom:1px solid #0087d4;border-left:1px solid #0087d4;padding-top:5px;padding-bottom:5px;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;word-break:keep-all" target="_blank" ><span style="padding-left:5px;padding-right:5px;font-size:16px;display:inline-block;letter-spacing:normal"><span style="font-size:16px;line-height:2;word-break:break-word">Complete Verification</span></span></a> </td></tr></tbody></table><table border="0" cellpadding="0" cellspacing="0" role="presentation" style="word-break:break-word" width="100%"><tbody><tr><td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px"><div style="color:#737373;direction:ltr;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:11px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left"><p style="margin:0"><em>Please use this link if the above button doesn't work: <a href="` +
            link +
            `" rel="noopener" style="text-decoration:underline;color:#0068a5" target="_blank" >Link</a></em></p></div></td></tr></tbody></table></td></tr></tbody></table></td></tr> </tbody></table></td></tr></tbody></table></div>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });
};

const register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { name, email, password, username, department, registrationNumber } =
        req.body;

    try {
        const check = await User.findOne({ email });
        if (check) {
            console.log(check);
            return res.status(403).json({ message: "User already exist" });
        }
        const user = new User({
            name,
            username,
            email,
            password,
            department,
            registrationNumber,
        });

        await user.save();

        const token = Jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: "3h",
            }
        );
        // Send Mail to user for confimation
        const tokenVerify = new Token({
            userId: user._id,
            token: crypto.randomBytes(16).toString("hex"),
        });
        await tokenVerify.save();
        sendConfirmationEmail(user, tokenVerify.token);

        return res.status(200).json({
            message: "User created",
            token,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

const login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ message: "User does not exist" });
    }

    const isMatch = await user.authenticate(password);

    if (!isMatch) {
        return res.status(401).json({ message: "User/Password not matching" });
    }

    const token = Jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: "3h",
        }
    );
    const responseUser = {
        email: user.email,
        isAdmin: user.isAdmin,
        name: user.name,
        role: user.role,
        createdOn: user.createdOn,
    };
    return res.status(200).json({
        responseUser,
        token,
    });
};
const verify = (req, res) => {
    const { token } = req.params;
    Token.findOne({ token })
        .then((token) => {
            if (!token) {
                return res.json({
                    message: "Token not found",
                });
            }
            User.findOne({ _id: token.userId })
                .then((user) => {
                    if (!user) {
                        return res.json({
                            message: "User not found",
                        });
                    }
                    user.isVerified = true;
                    user.save();
                    res.redirect("http://localhost:3000/login");
                })
                .catch((err) => {
                    res.json({
                        message: "User not found",
                        err,
                    });
                });
        })
        .catch((err) => {
            res.json({
                message: "Token not found",
                err,
            });
        });
};
module.exports = {
    register,
    login,
    verify,
};
